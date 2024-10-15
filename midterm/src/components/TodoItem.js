import {useState} from 'react'
import useTodoContext from '../hooks/use-todo-context'
import TodoEdit from './TodoEdit'

const TodoItem = (props) => {
  const {todo} = props
  const [showEdit, setShowEdit] = useState(false)
  const {deleteTodoById} = useTodoContext()

  const colorMap = {
    Critical: 'bg-red-700',
    Important: 'bg-yellow-500',
    Moderate: 'bg-lime-700'
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
    <div>
      <div className={colorMap[todo?.urgencyTag]}>{tag}</div>
      <div>{content}</div>
      <button onClick={handleEdit} className='border-2 border-black'>Edit</button>
      <button onClick={handleDelete} className='border-2 border-black'>Delete</button>
    </div>
  )
}

export default TodoItem