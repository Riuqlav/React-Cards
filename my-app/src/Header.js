import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const green = 'teal';
const gold = '#FFC300';

export default class Header extends React.Component{
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
  <nav class="navbar navbar-expand-lg" style ={{background: this.state.color}}>
    <a class="navbar-brand" href="#"></a>
    <img src={ require('./images/swords.png') } />
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Tennis</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Health</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Extra</a>
        </li>
      </ul>
      <button className = 'btn' onClick = {this.changeColor} style = {{float: 'right'}}> </button>
    </div>
  </nav>
        );
    }
}
