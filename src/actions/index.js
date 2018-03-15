let nextTodoId = 0;
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const addJaven = text => {
  return {
    type: 'ADD_JAVEN',
    id: nextTodoId++,
    text
  }
}
