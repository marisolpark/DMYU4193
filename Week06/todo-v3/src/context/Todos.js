import { clear } from '@testing-library/user-event/dist/clear'
import axios from 'axios' //needed to fetch from the API
// useCallback is a new react hook that we are learning. It is used specifically because we know that ths function 
// is NOT going to change however the file that is referencing this does not know that 
import {createContext, useState, useCallback} from 'react'
const TodoContext = createContext() //create a todo components

function Provider({children}) {
    const [todos, setTodos] = useState([])

// MUCH more common, wrap the function in useCallback inline
// useCallback memoizes fetchTodos aka one copy in memory and we always reference the same slot in the computers 
// memory. So it should never update unless there is something in the dependency array
  const fetchTodos = useCallback(async () => {
    const response = await axios.get('http://localhost:3001/todos')
    setTodos(response.data)
  }, [])

// not usually done in production but probably more clear
//   const stableFetchTodos = useCallback(fetchTodos, [])

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