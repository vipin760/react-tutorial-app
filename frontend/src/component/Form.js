import { Component } from "react";

class Form extends Component{
    state={
        inputValue:""
    }
    onChangeValue=(e)=>{
        console.log(e.target.value);
        this.setState({
           value:this.state.inputValue=e.target.value
        })
    }
    showValue=()=>{
        alert(this.state.inputValue);
    }
    render(){
        return (
            <form>
                <h1>forms</h1>
                <input type="text" onChange={this.onChangeValue}/>
                <button type="button" onClick={this.showValue}>submit</button>
            </form>
        )
    }
}

export default Form