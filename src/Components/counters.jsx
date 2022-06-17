import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component{
 
    render(){
        const {onReset,onDelete,counters,onIncrement,additionFunction} = this.props;
        return (
            <div>
                <button onClick={additionFunction}>Add</button>
                <button onClick={onReset}>reset</button>
            { counters.map(counter => <Counter 
            key={counter.id} 
            onDelete={onDelete} 
            counter = {counter}
            onIncrement = {onIncrement}
            />)}
            </div>
        )
    }
    
}
export default Counters;