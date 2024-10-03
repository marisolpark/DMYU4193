import TodoItem from './TodoItem'
// const deleteTodoById = (id) => {
//   const updatedTodos = todos.filter((todo) => {
//     // return truthy keeps, falsey removes!
//     return todo.id !== id
//   })
//   setTodos(updatedTodos)
// }

// const editTodoById = (id, newTitle) => {
//   const updatedTodos = todos.map((todo) => {
//     if (todo.id === id) {
//       return {...todo, title: newTitle}
//     }
//     return todo
//   })
//   setTodos(updatedTodos)
// }


const TodoList = (props) => {
  const {todos, onDelete, onEdit} = props

  // the list component is only responsible for mapping and passing props
  // we can use the todo.id for the key!
  const renderedTodos = todos.map((todo) => ( //ASK!! - is todo what you are passing it? or is it just what you are calling each thing in the todos?
    <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit} />
  ))
  return <div>{renderedTodos}</div>
}

export default TodoList