import { Component } from "react";

class Counter extends Component{
    state={
        counter:0
    }
    increment=()=>{
        this.setState({
            counter:this.state.counter+1
        })
    }
    decrement=()=>{
        this.setState({
            counter:this.state.counter-1
        })
    }
    render(){
        return(
            <div>
                <h1>Counter : {this.state.counter}</h1>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
            </div>
        )
    }
}
export default Counter