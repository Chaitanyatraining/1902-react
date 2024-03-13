import React, {useReducer} from 'react'
import { ArrowLeftCircle } from 'react-feather'
import { useNavigate } from 'react-router-dom'

const UseReducerHook = () => {
    const navigation = useNavigate()

    const reducer = (currentState, action) => {
        console.log(action)
        switch(action.type){
            case 'INCREMENT':
                return currentState + action.payload;
            case 'DECREMENT':
                return currentState - action.payload;
            default:
                return currentState
        }
    }

    const [count, dispatch] = useReducer(reducer, 0)
    
  return (
    <div>
        <div>
        <ArrowLeftCircle size={20} 
        onClick={()=>{navigation(-1)}} 
        />
        <h2>UseReducerHook</h2>
        </div>
        <h4>Count: {count}</h4>
        <button className='btn btn-primary me-2'
            onClick={()=>{dispatch({type:"INCREMENT", payload:5})}}
        >Increment</button>
        <button className='btn btn-danger me-2' 
            onClick={()=>{dispatch({type:"DECREMENT", payload:5})}}
        >Decrement</button>
    </div>
  )
}

export default UseReducerHook