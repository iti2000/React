import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HookCounter } from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFeching from './components/DataFeching';
import CounterOne from './components/CounterOne';

function App() {
  return (
    <div className="App">
     {/* <HookCounter/> */}
     {/* <HookCounterTwo/> */}
     {/* <HookCounterThree/> */}
     {/* <HookCounterFour/> */}
     {/* <HookCounterOne/> */}
     {/* <HookMouse/> */}
     {/* <MouseContainer/> */}
     {/* <IntervalHookCounter/> */}
     {/* <DataFeching/> */}
     <CounterOne/>
    </div>
  );
}

export default App;
