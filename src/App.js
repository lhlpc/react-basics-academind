import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>Hi, I am a React App.</div>
        <Person />
        <Person name="Henrique" age="25"/>
        <Person name="Yo">Internal content</Person>
      </div>
    );
  }
}

export default App;
