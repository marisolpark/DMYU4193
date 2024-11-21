import {useState} from 'react'
import useTodoContext from '../hooks/use-todo-context'
import {ReactComponent as Plus} from '@material-design-icons/svg/filled/add.svg'
import {ReactComponent as Work} from '@material-design-icons/svg/filled/work.svg'

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
    <form onSubmit={handleSubmit} className='flex flex-col space-y-2 pb-10'>
      <h1 className='inline-flex text-3xl text-center underline pb-6 place-content-center'>Task Manager<Work className='size-9'/></h1>
      <label>I have to ...</label>
      <input type="text" onChange={handleChange} value={title} className='border-2 border-black rounded'/>
      <select onChange={handleDropdownChange} value={urgencyTag} className='border-2 border-black rounded'>
        <option value='Moderate' selected>Moderate</option>
        <option value='Important'>Important</option>
        <option value='Critical'>Critical</option>
      </select>
      <button className='inline-flex buttonStyle rounded place-content-center'>
        Add task 
        <Plus className='fill-white'/>
      </button>
    </form>
  )
}

export default TodoCreate