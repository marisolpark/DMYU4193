import {useState} from 'react'
import useTodoContext from '../hooks/use-todo-context'

const TodoCreate = () => {
  const {createTodo} = useTodoContext()

  const [title, setTitle] = useState('')
  const [urgencyTag, setUrgencyTag] = useState('Moderate')
 
  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleDropdownChange = (event) => {
    setUrgencyTag(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    createTodo(title, urgencyTag)
    setTitle('')
    setUrgencyTag('Moderate')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Task Manager</h1>
      <label>Title:</label>
      <input type="text" onChange={handleChange} value={title} className='border-2 border-black'/>
      <select onChange={handleDropdownChange} value={urgencyTag} className='border-2 border-black'>
        <option value='Moderate' selected>Moderate</option>
        <option value='Important'>Important</option>
        <option value='Critical'>Critical</option>
      </select>
      <button className='border-2 border-black'>Add Todo</button>
    </form>
  )
}

export default TodoCreate