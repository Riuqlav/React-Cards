import React from 'react';
import './App.css';
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import DeckoCards from './DeckoCards'

function App() {
  return (
    <div className="App">
        <Header />
        <DeckoCards />
    </div>
  );
}

export default App;
