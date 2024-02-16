import React, { Component } from 'react'


class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            firstName:'',
            lastName:''
        }
        this.inputOne =React.createRef()
        this.inputTwo =React.createRef()
    }
    submit=()=>{
        console.log(this.inputOne.value);
        console.log(this.inputTwo.value);
    }
    render(){
        return(
            <div>
                <form>
                    <input type="text" name="firstName" ref={(input=>this.inputOne=input) } />
                    <input type="text" name="lastName" ref={(input=>this.inputTwo=input) } />
                    <button onClick={this.submit}>submit</button>
                </form>
            </div>
        )
    }
}

export default Form;