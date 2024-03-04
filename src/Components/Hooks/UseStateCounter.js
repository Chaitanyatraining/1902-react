import React, {useState} from 'react'

const UseStateCounter = () => {
    const [count, setCount] = useState(0)

    // Rules of hooks
    // always call the hooks at the top level.
    // Don't call hooks inside loops, conditions or nested funcitons
    // Don't call hooks form regular javascript funcitons, instead either 
    // call them from react funcitons or custom hooks.

  return (
    <>
        <h2>UseStateCounter</h2>
        <h4>Count: {count}</h4>
        <button className='btn btn-primary me-2'
        onClick={()=>{setCount(count + 1)}}
        >Increment</button>
        <button className='btn btn-warning'
        onClick={()=>{setCount(count - 1)}}
        >Decrement</button>
    </>
  )
}

export default UseStateCounter