import React, { Component } from 'react';


// Global App Style
import './App.css';


// Components Module Import always after core modules
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer.js';


class App extends Component {
 constructor() {
  super();

  this.state = {};
 }

 render() {
  return (
   <div className="app-container">
    <Header />
    <Main />
    <Footer />
   </div>
   )
 }
}

export default App;