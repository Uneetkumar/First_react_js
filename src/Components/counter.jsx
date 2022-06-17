import React, { Component } from 'react';
import '../App.css';

 class Counter extends Component{
    render(){
        return(
            <div>
                
                <h4>Id of this Component is #{this.props.counter.id}</h4>
                <span>{this.getCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)}>Incremnt</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)}>delete</button>
            </div>
        );
    }
    getCount(){
        const {value} = this.props.counter;
       return value === 0 ? "Zero": value;
    }
    
}
export default Counter;