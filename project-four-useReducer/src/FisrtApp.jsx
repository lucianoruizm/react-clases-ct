import { useReducer } from 'react'
import { useState } from 'react'
import './App.css'

// este objeto contiene los tipos
const TYPES = {
  increment: 'increment',
  decrement: 'decrement',
  reset: 'reset'
}

// se crea useReducer
const reducer = (state, action) => {
  
  switch(action.type){
    case TYPES.increment:
      return state + 1 * action.payload
    case TYPES.decrement:
      return state - 1
    case TYPES.reset:
      return 0
    default:
      return state
  }

} 

function FirstApp() {
  // con useState, const [count, setCount] = useState(0)
  const [counter, dispatch] = useReducer(reducer, 0)

  return (
    <div className="App">
      <h1>{counter}</h1>
      {/* con useState, <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>setCount(count-1)}>-</button> */}
      <button 
        onClick={()=>dispatch({
          type: TYPES.decrement
        })}
      >
        -
      </button>
      <button 
        onClick={()=>dispatch({
          type: TYPES.increment,
          payload: 10
        })}
      >+
      </button>
      <button 
        onClick={()=>dispatch({
          type: TYPES.reset
        })}
      >
        RESET
      </button>
    </div>
  )
}

export default FirstApp