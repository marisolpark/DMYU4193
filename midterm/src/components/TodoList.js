import useTodoContext from '../hooks/use-todo-context'
import TodoItem from './TodoItem'

const TodoList = () => {
  const {todos} = useTodoContext()
  // console.log(todos)

  const sortedTodos = todos.sort((a, b) => {
    const valueA = a.urgencyTag
    const valueB = b.urgencyTag
    // console.log(valueA)
    // console.log(valueB)

    if (valueA < valueB) {
      return -1
    }
    if (valueA > valueB) {
      return 1
    }
    return 0
  })
  // console.log(sortedTodos)

  const renderedTodos = sortedTodos.map((todo) => (
    <TodoItem key={todo.id} todo={todo}/>
  ))
  return (
    <div>
      <h4 className='subtitle pb-4'>{todos.length} tasks todo:</h4>
      <div className='space-y-4'>{renderedTodos}</div>
    </div>
  )
}

export default TodoList