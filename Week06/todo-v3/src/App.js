import { useEffect } from 'react'
import useTodoContext from './hooks/use-todo-context'
import axios from 'axios'
// its anolyung to have to write this whole thing to use TodoContext so we are creating a hook for it
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

const App = () => {
  // fetchTods is the only item you need from context in app
  const {fetchTodos} = useTodoContext()

  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  
  return (
    <div>
      <TodoCreate />
      <TodoList />
    </div>
  )
}

export default App


// ahook is a function that adds additional features to a component
