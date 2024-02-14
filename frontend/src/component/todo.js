import { Component } from "react";

class Todo extends Component{
    render(){
        return (
            <div><h1>HELLO</h1><h1>{this.props.myString}</h1></div>
        )
    }
}



export default Todo;