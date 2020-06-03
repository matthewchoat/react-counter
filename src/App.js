import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import BackgroundVideo from './Components/BackgroundVideo'

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <BackgroundVideo />
      </header>
  
      <Counter/>
    </div>
  );
}

export default App;
