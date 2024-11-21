import {useState} from 'react'
import TodoEdit from './TodoEdit'
import {ReactComponent as Edit} from '@material-design-icons/svg/filled/edit.svg'
import {ReactComponent as Delete} from '@material-design-icons/svg/filled/delete.svg'

const TodoItem = (props) => {
  const {todo, onDelete, onEdit} = props
  const [showEdit, setShowEdit] = useState(false)

  const handleDelete = () => {
    onDelete(todo.id)
  }
  const handleEdit = () => {
    setShowEdit(!showEdit)
  }

  const handleSubmit = (id, newTitle) => {
    onEdit(id, newTitle)
    setShowEdit(false)
  }

  let content = <h3>{todo.title}</h3>
  
  if (showEdit) {
    content = <TodoEdit todo={todo} onSubmit={handleSubmit} />
  }

  return (
    <div className='todoLayout'>
      <div className="itemWrap">
        {content}
      </div>
      <div className='editDeleteLayout'>
        <button onClick={handleEdit} className='otherButton'><Edit className='otherIconColor'/></button>
        <button onClick={handleDelete} className='otherButton'><Delete className='otherIconColor'/></button>
      </div>
    </div>
  )
}

export default TodoItem