import React, { Component } from "react";
import Main, { ProjectGrid, Extern } from "./Components/Main";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <ProjectGrid />
        <Extern />
      </div>
    );
  }
}

export default App;
