import React, { Component } from 'react';
import './App.css';
import Page from './main.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick() {
    this.setState({
      enter: true
    })
  }
  render() {
    return (
      <div className="App">
      <div className="Enter-Pic">
      </div> 
      <div className="Enter-Title">  
          <h1 className="name-title">Arleta Jurkiewicz</h1> 
          <a className="Enter-page" onClick={this.handleClick} >Wejdź na stronę</a>
      </div>
      
      </div>
    );
  }
}

export default App;
