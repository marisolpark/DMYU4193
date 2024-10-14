import {useState} from 'react'
import useTodoContext from '../hooks/use-todo-context'

const TodoCreate = () => {
  const {createTodo} = useTodoContext()

  const [title, setTitle] = useState('')

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    createTodo(title)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Task Manager</h1>
      <label>Title:</label>
      <input type="text" onChange={handleChange} value={title} />
      <select>
        <option>Critical</option>
        <option>High priority</option>
        <option>Moderate</option>
      </select>
      <button>Add Todo</button>
    </form>
  )
}

export default TodoCreate