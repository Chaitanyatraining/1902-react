import { Component } from "react";

class ClassComp extends Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    
    render(){
        return(
            <div>
                 <h5>The course Name is {this.props.courseName}</h5>
            </div>
        )
    }
}
export default ClassComp