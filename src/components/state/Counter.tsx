import { useReducer } from "react"

type stateType = {
    count: number
}

type actionType = {
    type: string,
    payload: number
}


const initialState = {
    count: 0
}

const reducer = (state: stateType, action: actionType) => {
    switch(action.type) {
        case 'increment':
            return {count: state.count + action.payload}
        case 'decrement':
            return {count: state.count - action.payload}
        default:
            return state
    }
}

const Counter = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count is {state.count}</h1>
      <button onClick={() => dispatch({type: 'increment', payload: 10})}>Increment count</button>
      <button onClick={() => dispatch({type: 'decrement', payload: 10})}>Decrement count</button>
    </div>
  )
}

export default Counter
