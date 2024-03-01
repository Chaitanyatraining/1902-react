import React, { Component } from 'react'
import Counter from './Counter'

export class LifeCycleMethods extends Component {
    constructor(){
        super()
        console.log('constructor Executed')
    }

    state={
        usersData:[]
    }

    componentDidMount(){
        console.log('componentdidmount executed')
        this.getUsersdata()
    }

    getUsersdata = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        this.setState({usersData:data})
        console.log('state', this.state)
    }

    static getDerivedStateFromProps(props, state){
        console.log('static getDerivedStateFromProps executed')
        return null
    }
   
    
  render() {
    return (
      <>
        <h2>LifeCycleMethods</h2>
        <div>
                    <table className='table table-striped table-hover'>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>userName</th>
                            <th>email</th>
                            <th>city</th>
                        </tr>
                        { this.state.usersData.length>0 ? (this.state.usersData.map((user)=>(
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.address.city}</td>
                            </tr>
                        ))) : <p>No data found</p>
                    }
                    </table>
                </div>
      </>
    )
  }
}

export default LifeCycleMethods