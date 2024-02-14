import { Component } from "react";

class Form extends Component{

    state={
        firstName:'',
        lastName:''
    }
    onChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    onSubmit=()=>{
        console.log((this.state));
        alert(this.state)
    }
    render(){
        return(
            <div>
                <h4>compount Form</h4>
                <form>
                    <input type="text" onChange={this. onChange} name="firstName" value={this.state.firstName} />
                    <input type="text" onChange={this. onChange} name="lastName"value={this.state.lastName}/>
                    <button type="button" onClick={this.onSubmit}>click</button>
                </form>
            </div>
        )
    }
}

export default Form