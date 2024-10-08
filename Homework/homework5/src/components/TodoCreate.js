import {useState} from 'react'
import styles from './styles.css'
import {ReactComponent as Add} from '@material-design-icons/svg/filled/add.svg'

const TodoCreate = (props) => { 
  const {onCreate} = props
  const [title, setTitle] = useState('')
  const handleChange = (event) => {
    setTitle(event.target.value) 
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onCreate(title)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} className='formLayout'>
      <label>I have to:</label>
      <div>
        <input type="text" onChange={handleChange} value={title} className='inputStyle'/>
        <button className='submitButton'><Add className='plusColor'/></button>
      </div>
    </form>
  )
}

export default TodoCreate