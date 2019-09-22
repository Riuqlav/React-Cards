import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Themet from './Themet.js'

export default class Header extends React.Component{
    render(){
        return(
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Data1</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Data2</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Data3</a>
      </li>
    </ul>
    <Themet />
  </div>
</nav>
        );
    }
}
