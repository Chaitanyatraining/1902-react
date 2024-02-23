import React, { Component } from 'react'

export class Counter extends Component {
    constructor(){
        super()

        // this.state = {
        //     count:0
        // }
    }
    
    //never update the state directly

    state = {
        count:0
    }
    
    handleIncrement = () => {
        this.setState({count:this.state.count + 1})
    }

  render() {
    return (
      <>
        <h2>Counter App</h2>
        <h4>Count: {this.state.count}</h4>

        <button className='btn btn-primary me-1'
        onClick={this.handleIncrement}
        >Increment</button> 
        <button className='btn btn-danger'>Decrement</button>
      </>
    )
  }
}

export default Counter