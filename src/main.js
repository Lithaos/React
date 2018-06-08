import React, { Component } from 'react';
import './main.css';

class Page extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick() {
    
  }
  render() {
    return (
      <div className="main">
      Sieeema
      </div>
    );
  }
}

export default Page;
