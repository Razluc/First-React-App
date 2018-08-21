import React, { Component } from 'react';
import Header from "./components/Header";
import Contact from "./components/Contact";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>Welcome</h1>
        <Contact />
      </div>
    );
  }
}

export default App;
