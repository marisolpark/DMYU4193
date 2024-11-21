import {useState} from 'react'
import useTodoContext from '../hooks/use-todo-context'

const TodoEdit = (props) => {
  const {todo, onSubmit} = props
  const [title, setTitle] = useState(todo.title)
  const [urgencyTag, setUrgencyTag] = useState(todo.urgencyTag)
  const {editTodoById} = useTodoContext()

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleDropdownChange = (event) => {
    setUrgencyTag(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    editTodoById(todo.id, title, urgencyTag)
    onSubmit()
  }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col space-y-2 pb-10'>
      <label>Title:</label>
      <input type="text" onChange={handleChange} value={title} className='border-2 border-black rounded'/>
      <select onChange={handleDropdownChange} value={urgencyTag} className='border-2 border-black rounded'>
        <option value='Moderate' selected>Moderate</option>
        <option value='Important'>Important</option>
        <option value='Critical'>Critical</option>
      </select>
      <button className='buttonStyle rounded'>Update</button>
    </form>
  )
}

export default TodoEdit