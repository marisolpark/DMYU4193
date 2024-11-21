import {useState} from 'react'
import useTodoContext from '../hooks/use-todo-context'
import TodoEdit from './TodoEdit'
import {ReactComponent as Delete} from '@material-design-icons/svg/filled/delete.svg'
import {ReactComponent as Edit} from '@material-design-icons/svg/filled/edit.svg'

const TodoItem = (props) => {
  const {todo} = props
  const [showEdit, setShowEdit] = useState(false)
  const {deleteTodoById} = useTodoContext()

  const colorMap = {
    Critical: 'bg-red-400 text-red-900 px-4 rounded',
    Important: 'bg-yellow-300 text-amber-700 px-4 rounded',
    Moderate: 'bg-lime-300 text-lime-900 px-4 rounded'
  }

  const handleDelete = () => {
    deleteTodoById(todo.id)
  }

  const handleEdit = () => {
    setShowEdit(!showEdit)
  }

  const handleSubmit = () => {
    setShowEdit(false)
  }

  let content = <h3>{todo.title}</h3>
  let tag = <h4>{todo.urgencyTag}</h4>
  if (showEdit) {
    content = <TodoEdit todo={todo} onSubmit={handleSubmit} />
  }

  return (
    <div className='flex flex-col bg-slate-100 border-8 border-slate-100 rounded'>
      <div className='text-slate-100 w-min pb-4'>
        <div className={colorMap[todo?.urgencyTag]}>{tag}</div>
      </div>
      <p className='contentLayout text-lg pb-4'>{content}</p>
      <div className='flex flex-row-reverse'>
        <button onClick={handleDelete} className='buttonStyle rounded'><Delete className='fill-white'/></button>
        <button onClick={handleEdit} className='buttonStyle rounded'><Edit className='fill-white'/></button>
      </div>
    </div>
  )
}

export default TodoItem