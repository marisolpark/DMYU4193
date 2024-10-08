import {useState, useContext} from 'react'
import TodoContext from '../context/Todos'

const TodoCreate = () => {
  const {createTodo} = useContext(TodoContext)

  const [title, setTitle] = useState('')

  // this are form binding finctions so they need to live locally
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
      <label>Title:</label>
      <input type="text" onChange={handleChange} value={title} />
      <button>Add Todo</button>
    </form>
  )
}

export default TodoCreate