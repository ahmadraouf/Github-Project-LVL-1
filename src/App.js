import React, { Component } from 'react';
import './style/main.css';
import Header from './components/Header';

export default class App extends Component {

  state = {
    repos: [
      {id: 1,title: 'Array',status: 'Private',language: 'HTML'},
      {id: 2,title: 'Object',status: 'Public',language: 'JavaScript'}
    ],
  };

  render() {
    return (
      <div className="main-wrapper">
        <Header />
      </div>
    );
  }
}
