import axios from 'axios' //needed to fetch from the API
import {createContext, useState} from 'react'
const TodoContext = createContext() //create a todo components


function Provider({children}) {
    const [todos, setTodos] = useState([])

  const fetchTodos = async () => {
    const response = await axios.get('http://localhost:3001/todos')
    setTodos(response.data)
  }

  const createTodo = async (title) => {
    const response = await axios.post('http://localhost:3001/todos', {title})
    // always make a copy and add the new at the end
    const updatedTodos = [...todos, response.data]
    // always set with the copy so react knows to compare 2 different slots in its memory
    setTodos(updatedTodos)
  }

  const editTodoById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/todos/${id}`, {
      title: newTitle,
    })

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
      // return truthy keeps, falsey removes!
      return todo.id !== id
    })

    setTodos(updatedTodos)
  }

  const contextValues = {
    todos,
    fetchTodos,
    createTodo,
    editTodoById,
    deleteTodoById,

  }

    return (
        <TodoContext.Provider value={contextValues}> 
            {children}
        </TodoContext.Provider>
    )
}

export {Provider}
export default TodoContext

// import both in the same file
// import TodoContext, {Provider} from './*'