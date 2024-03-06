import React, { useEffect, useState } from 'react'

const UseEffectPagination = () => {
    const [userData, setUserData] = useState([])
    const [pageNumber, setPageNumber] = useState(0)

    useEffect(()=>{
        getUsersData()
    }, [pageNumber])

    const getUsersData = async () => {
        const response = await fetch(`https://dummyapi.io/data/v1/user?page=${pageNumber}&limit=10`, {
           method:"GET",
           headers:{
            "app-id":"633e33e98efd49504c9c7643"
           }
        })
        const {data} = await response.json()
       setUserData(data)      
    }

  return (
    <div>
        <h2>UseEffectPagination</h2>
        <div className='container'>
            <div className='row'>
            {
               userData && userData.length>0 ? 
                (userData.map((user) => (
                        <div className='col-md-6'>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <img src={user.picture} alt={user.firstName} />
                                </div>
                                <div className='col-md-8'>
                                    <h5>{user.id}</h5>
                                    <p>{user.title} {user.firstName} {user.lastName}</p>
                                </div>
                            </div>
                    </div>
                )) 
                ) : <p>Loading...</p>
            }
            </div>
            {
                [1,2,3,4,5,6,7,8,9].map((num) => (
                    <button className='btn btn-primary mx-2 my-5'
                    onClick={()=>{setPageNumber(num)}}
                    >{num}</button>
                ))
            }

        </div>
    </div>
  )
}

export default UseEffectPagination