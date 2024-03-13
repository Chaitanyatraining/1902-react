import React, { useEffect, useRef } from 'react'

const UseRefHook = () => {
    const data = useRef(null)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data.current.value)
    }

    useEffect(()=>{
        data.current.focus()
    }, [])

  return (
    <div>
        {/* 
            useState will re-render when the content change and upate the UI.

            useref- it doesn't notify you when its content changes. mutating the 
            (.current) property doesn't cause a re-render
        */}
        <h2>UseRef Hook</h2>
        <form>
            <input type="text" ref={data}  />
            <button className='btn btn-secondary ms-3'
            onClick={(e)=>{handleSubmit(e)}}
            >submit</button>
        </form>
    </div>
  )
}

export default UseRefHook