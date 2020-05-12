import API from 'goals-todos-api'

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

function addTodo (todo) {
  return {
    type: ADD_TODO,
    todo,
  }
}

function removeTodo (id) {
  return {
    type: REMOVE_TODO,
    id,
  }
}

function toggleTodo (id) {
  return {
    type: TOGGLE_TODO,
    id,
  }
}

function addGoal (goal) {
  return {
    type: ADD_GOAL,
    goal,
  }
}

export function handleDeleteTodo (todo) {
  return (dispatch) => {
    dispatch(removeTodo(todo.id))

    return API.deleteTodo(todo.id).catch(() => {
      dispatch(addTodo(todo))
      alert('An error ocurred. Try again.')
    })
  }
}

export function handleSaveTodo (name, clearInput) {
  return (dispatch) => {
    return API.saveTodo(name)
      .then((todo) => {
        dispatch(addTodo(todo))
        clearInput()
      })
      .catch(() => {
        alert("There was an error. Try again.")
      })
  }
}

export function handleToggleTodo (id) {
  return (dispatch) => {
      dispatch(toggleTodo(id))
      return API.saveTodoToggle(id)
        .catch(() => {
          dispatch(toggleTodo(id))
          alert('An error ocurred. Try again.')
      })
  }
}
