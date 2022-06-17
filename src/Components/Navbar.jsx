import React, { Component } from 'react'

class NavaBar extends Component{
    render(){
        return(
            <div>
                <h1>Navbar 
                    <span>{this.props.totalCounters}</span>
                </h1>
                
            </div>
        )
    }
}
export default NavaBar;