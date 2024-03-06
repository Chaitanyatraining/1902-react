import React,{useState, useEffect} from 'react'

const UseEffectHook = () => {
    const [userData, setUserData] = useState([])

    // this is similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        getUsersdata()

        // unmounting
        // return(){
        //   // 
        // }
    }, [])

   const getUsersdata = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setUserData(data)  
    }
    
  return (
    <>
        <h2>UseEffectHook</h2>
    </>
  )
}

export default UseEffectHook