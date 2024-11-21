import {useEffect, useState} from 'react'
import axios from 'axios'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

const App = () => {
  const [todos, setTodos] = useState([])

  const fetchTodos = async () => {
    const response = await axios.get('http://localhost:3001/todos')
    setTodos(response.data)
  }

  //calling it here would cause an infinite look
  // fetchTodos()

  // if [] is empty then the function will only run when it is mounted. 
  // If the [] is not there at all it will call the function each time the page re-renders
  //if there is smth in the [] then it will reder the first time it is mounted and every time the smth changes
  useEffect(() => {fetchTodos()}, []) 

  const createTodo = async (title) => {
    const response = await axios.post('http://localhost:3001/todos', {title})
    // always make a copy anbd add the new one at the end
    const updatedTodos = [...todos, response.data]
    // always set with the copy so react knows to compare to different slots on ots memory
    setTodos(updatedTodos)
  }

  const editTodoById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/todos/${id}`, {title:newTitle})

    const updatedTodos = todos.map((todo) => { 
      if (todo.id === id) {
        return {...todo, ...response.data}
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const deleteTodoById = async (id) => {
    await axios.delete(`http://localhost:3001/todos/${id}`)

    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id
    })

    setTodos(updatedTodos)
  }

  return (
    <div>
      <TodoCreate onCreate={createTodo} /> 
      <TodoList todos={todos} onDelete={deleteTodoById} onEdit={editTodoById} />
    </div>
  ) 
}

export default App