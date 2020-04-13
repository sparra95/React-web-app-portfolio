import React, { Component } from "react"
import Header from "./Components/Header/Header.js"
import Body from "./Components/Body/Body.js"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
				<Body />
      </div>
    );
  }
}

export default App

/*
	NOTES:
	- Body will track which Navbar tab is active and change what displays on Main
	-

*/



/**
-------------------
|  Original Code  |
-------------------

import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App-">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App; **/
