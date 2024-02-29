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
        
      </>
    )
  }
}

export default LifeCycleMethods