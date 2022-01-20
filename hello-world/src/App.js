import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

function App() {
  return (
    <div className="App">
      {/* <Greet name="meet" heroname="iti">
        <p>Hello this is children</p>
      </Greet>
      <Greet name="Anuj"heroname="iti">
      <button>Action</button>
      </Greet>
      // 

       <Welcome name="meet" heroname="iti"/>
       <Welcome name="Anuj"heroname="iti"/>
       <Welcome name="Poojan"heroname="iti"/>
      <Hello/>  */}
      {/* <Greet name="Poojan"heroname="iti"/> */}
      {/* <Message/> */}
      {/* <Counter/> */}
      <FunctionClick/>
      <ClassClick/>
    </div>
  );
}

export default App;
