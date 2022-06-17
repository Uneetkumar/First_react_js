// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import NavaBar from './Components/Navbar';
import Counters from './Components/counters';
import Counter from './Components/counter';

class App extends Component{
  state = {
    counters:[
        {id : 1, value:0},
        {id : 2, value:0},
        {id : 3, value:0},
        {id : 4, value:0},
    ]
}
deleteFunction = counterId => {
  const counters = this.state.counters.filter(c => c.id !== counterId);
  this.setState({counters});
}
addFunction = () =>{
  let {id} = this.state.counters;
  this.setState({id: id+1});
  this.state.counters.push(id)
}
resetFunction = () =>{
  const counters = this.state.counters.map(c => {
      c.value =0;
      return c;
  })
  this.setState({counters})
}
incrementFunction = counter =>{
 const counters = [...this.state.counters]; 
 const index = counters.indexOf(counter);
 counters[index] = {...counter};
 counters[index].value++;       
 this.setState({counters})
}
  render(){
    return(
      <React.Fragment>
        <NavaBar totalCounters = {this.state.counters.filter(c => c.value > 0).length}/>
        <main>
          <Counters onReset={this.resetFunction} additionFunction={this.addFunction} counters = {this.state.counters} onDelete = {this.deleteFunction} onIncrement = {this.incrementFunction}/>
        </main>
      </React.Fragment>
    )
  }
}
export default App;
