import React, { Component } from "react";
import Main, { ProjectGrid, Extern } from "./Components/Main";
import { Footer } from "./Components/Helper";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App ui override black">
        <Main />
        <ProjectGrid />
        <Extern />
        <Footer />
      </div>
    );
  }
}

export default App;
