import React from 'react'

const Home = (props) => {
  const {setMenuList} = props

  return (
    <div className='container'>
        <h2>Home</h2>
        <div className='row'>
          <div className='col-md-4 card'>
          <h5 onClick={()=>setMenuList(true)}>listandkeys</h5>
          </div>
          <div className='col-md-4'></div>
          <div className='col-md-4'></div>
        </div>
    </div>
  )
}

export default Home