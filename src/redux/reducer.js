const initialText = {
  number: 0,
}

export function reducer(state= initialText, action) {
  if (action.type === "INCREMENT"){
    return {...state, number: state.number+1}
  }
  if (action.type === "DECREMENT"){
    return {...state, number: state.number-1}
  }
  return state;
}