import './App.css';
import { Component } from 'react';
import Todo from './component/todo';
import Counter from './component/counter';

class App extends Component{
  state={
    name:"vipin",
    name2:"hello"
  }
  render(){
    return (
      <div className='App'>
        <h1>dhskdfhksd</h1>
        <Todo myString={this.state.name2} />
        <Counter/>
      </div>
    )
  }
}

export default App;