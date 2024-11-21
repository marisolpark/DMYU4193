import { useState } from 'react'
import useTodoContext from '../hooks/use-todo-context'
import TodoEdit from './TodoEdit'
const TodoItem = (props) => {
  const {todo} = props
  const [showEdit, setShowEdit] = useState(false)
  const {deleteTodoById} = useTodoContext()

  const handleDelete = () => {
    deleteTodoById(todo.id)
  }

  // we need the handle edit bc it is our local state that tells the component if it shows or hides
  const handleEdit = () => {
    setShowEdit(!showEdit)
  }

  const handleSubmit = () => {
    // we no longer need onEdit here. The editTodo component can directly access edityById from context
    // handle submit no longer needs the parameters to edit
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