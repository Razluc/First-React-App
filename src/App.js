import React, { Component } from "react";
import Header from "./components/Header";
import Contact from "./components/Contact";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header branding="Contact Manager" />
          <Contact
            name="ladimir Kliscoci"
            email="putin@gmail.com"
            phone="800-900-1000"
          />
        </div>
      </div>
    );
  }
}

export default App;
