import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
//import 'bootstrap/dist/css/bootstrap.min.css';
import Themet from './Themet.js'
import DeckoCards from './DeckoCards'

function App() {
  return (
    <div className="App">
        <Header />
        <Themet />
        <DeckoCards />
    </div>
  );
}

export default App;
