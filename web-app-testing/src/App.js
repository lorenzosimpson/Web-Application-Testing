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
  
  const foul = () => {
    //a foul increases strikes up to 2. With no strikes, a foul makes it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes.
    if (strike === 0) {
      setStrike(1)
    }
    else if (strike === 1) {
      setStrike(2)
    }
  }

  return (
    <div className="App">
      <Display ball={ball} strike={strike}/>
      <Dashboard changeBall={changeBall} changeStrike={changeStrike} foul={foul} reset={reset}/>
    </div>
  );
}

export default App;
