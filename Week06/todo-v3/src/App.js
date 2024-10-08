import { useEffect, useContext } from 'react'
import TodoContext from './context/Todos'
import axios from 'axios'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

const App = () => {
  // fetchTods is the only item you need from context in app
  const {fetchTodos} = useContext(TodoContext)

  useEffect(() => {
    fetchTodos()
  }, [])

  
  return (
    <div>
      <TodoCreate />
      <TodoList />
    </div>
  )
}

export default App
