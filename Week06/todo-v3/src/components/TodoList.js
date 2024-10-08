import {useContext} from 'react'
import TodoContext from '../context/Todos'
// whenever we want to use context we need to import this

import TodoItem from './TodoItem'

const TodoList = () => {
  const {todos} = useContext(TodoContext)
  const renderedTodos = todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} />
  ))
  return (
    <div>
      {renderedTodos}
    </div>
  )
}

export default TodoList