import {useState} from 'react'
// import {ReactComponent as Update} from '@material-design-icons/svg/filled/update.svg'

const TodoEdit = (props) => {

  const {todo, onSubmit} = props

  const [title, setTitle] = useState(todo.title)

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(todo.id, title)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Update taks to: </label>
      <input type="text" onChange={handleChange} value={title} />
      <button className='submitButton'>Update</button>
    </form>
  )
}

export default TodoEdit