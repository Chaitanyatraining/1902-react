import React from 'react'

const FuncComp = (props) => {
    console.log(props)
    const {courseName} = props
  return (
    <div>
        <h5>The course Name is {courseName}</h5>
    </div>
  )
}

export default FuncComp