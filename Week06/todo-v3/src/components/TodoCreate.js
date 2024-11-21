import {useState} from 'react'
import useTodoContext from '../hooks/use-todo-context'

const TodoCreate = () => {
  const {createTodo} = useTodoContext()

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