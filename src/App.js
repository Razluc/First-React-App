import React, { Component } from "react";
import Header from "./components/Header";
import Contact from "./components/Contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact
          name="ladimir Kliscoci"
          email="putin@gmail.com"
          phone="800-900-1000"
        />
      </div>
    );
  }
}

export default App;
