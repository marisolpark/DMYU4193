import {useState} from 'react'
import useTodoContext from '../hooks/use-todo-context'
import TodoEdit from './TodoEdit'

const TodoItem = (props) => {
  const {todo} = props
  const [showEdit, setShowEdit] = useState(false)
  const {deleteTodoById} = useTodoContext()

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
  if (showEdit) {
    content = <TodoEdit todo={todo} onSubmit={handleSubmit} />
  }

  return (
    <div>
      {content}
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default TodoItem