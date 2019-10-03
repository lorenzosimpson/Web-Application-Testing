import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';


function App() {

  const [ball, setBall] = useState(0);
  const [strike, setStrike] = useState(0);

  

  return (
    <div className="App">
      <Display ball={ball} strike={strike}/>
      <Dashboard />
    </div>
  );
}

export default App;
