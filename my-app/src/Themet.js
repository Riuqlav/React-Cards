import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const green = '#2ECC71';
const gold = '#FFC300';

export default class Themet extends Component{
    constructor(props){
      super(props);
      this.state = {
        color: green
      };
      this.changeColor = this.changeColor.bind(this);
    }

    changeColor(){
      const newColor = this.state.color == green ? gold : green;
    this.setState({color: newColor});
    }

    render(){
      return(
        <div style ={{background: this.state.color}}>
            <button onClick = {this.changeColor}>
              Change color
              </button>
        </div>
    );
    }
}

//ReactDOM.render(
//  <Themet />,
//  document.getElementById('app')
//);
