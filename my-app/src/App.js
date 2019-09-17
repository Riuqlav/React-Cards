import React from 'react';
import logo from './logo.svg';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Themet from './Themet.js'
import DeckoCards from './DeckoCards'

function App() {
  return (
    <div className="App">
        <Themet />
        <DeckoCards />
    </div>
  );
}

export default App;
