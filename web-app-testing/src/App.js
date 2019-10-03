import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';


function App() {

  const [ball, setBall] = useState(0);
  const [strike, setStrike] = useState(0);

  const reset = () => {
    setBall(0);
    setStrike(0)
  }
  const resetStrike = () => {
    setStrike(0);
  }

  const changeBall = () => {
    setBall(ball + 1)

    if (ball === 3 ) {
      reset()
    }
    else if (strike === 2) {
      reset()
    }
  
  }

  const changeStrike = () => {
    setStrike(strike + 1)

    if (strike === 2 ) {
      reset()
    }
    else if (ball === 3) {
      reset()
    }
  
  }
  // const reset = () => {
  //   if (ball === 4 || strike === 3) {
  //     setBall(0)
  //     setStrike(0);
  //   }
  // }
  return (
    <div className="App">
      <Display ball={ball} strike={strike}/>
      <Dashboard changeBall={changeBall} changeStrike={changeStrike}/>
    </div>
  );
}

export default App;
