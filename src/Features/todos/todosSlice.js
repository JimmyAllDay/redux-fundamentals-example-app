const initialState = [
  { id: 0, text: 'Learn React', completed: true },
  { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
  { id: 2, text: 'Build something fun!', completed: false, color: 'blue' },
]

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  return maxId + 1
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/todoAdded': {
      // Can return just the new todos array - no extra object around it
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
      ]
    }
    case 'todos/todoToggled': {
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo
        }

        return {
          ...todo,
          completed: !todo.completed,
        }
      })
    }
    case 'todos/colorSelected': {
      return state.map((todo) => {
        if (todo.id !== action.payload.todoId) {
          return todo
        }
        return {
          ...todo,
          color: action.payload.color,
        }
      })
    }
    case 'todos/todoDeleted': {
      //payload: todoId
      console.log('todos/todoDeleted')
      return state.filter((todo) => {
        return todo.id !== action.payload
      })
    }
    case 'todos/allCompleted': {
      // no payload
      console.log('todos/allCompleted')
      return state.map((todo) => {
        return (todo.completed = true)
      })
    }
    case 'todos/completedCleared': {
      // no payload
      console.log('todos/completedCleared')
      return { ...state }
    }

    default:
      return state
  }
}
