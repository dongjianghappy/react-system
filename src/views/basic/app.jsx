import React from 'react';

export default class App extends React.Component{
    
    render(){
        return(
            <div>
                <button onClick={this.props.add}>递增</button>
                <button onClick={this.props.del}>递减</button>
            </div>
        )
    }
}