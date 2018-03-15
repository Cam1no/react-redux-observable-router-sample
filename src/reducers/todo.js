const initialState = {
  id: 0,
  text: 'HelloWorld',
}

const todo = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        id: action.id,
        text: action.text
      });
    case 'ADD_JAVEN':
      return Object.assign({}, state, {
        id: action.id,
        text: action.text
      })
    default:
      return state
  }
}
export default todo
