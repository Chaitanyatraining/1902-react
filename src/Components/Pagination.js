import React, { Component } from 'react'

class Pagination extends Component {
    state={
        userData:[],
        pageNumber:0
    }

    componentDidMount(){
        this.getUsersData()
    }

    getUsersData = async () => {
        const response = await fetch(`https://dummyapi.io/data/v1/user?page=${this.state.pageNumber}&limit=10`, {
           method:"GET",
           headers:{
            "app-id":"633e33e98efd49504c9c7643"
           }
        })
        const {data} = await response.json()
        this.setState({userData: data})
        console.log(data)
    }

            // 0 != 4
            // 4 != 5
            // 5 != 5
    componentDidUpdate(prevsProps, prevsState){
        if(prevsState.pageNumber != this.state.pageNumber){
            this.getUsersData()
        }
    }

  render() {
    return (
      <div>
        <h2>Pagination</h2>
        <div className='container'>
            <div className='row'>
            {
                this.state.userData && this.state.userData.length>0 ? 
                (this.state.userData.map((user) => (
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
                    onClick={()=>{
                        this.setState({pageNumber:num})
                    }}
                    >{num}</button>
                ))
            }

        </div>
      </div>
    )
  }
}

export default Pagination