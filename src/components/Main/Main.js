import React, { Component } from 'react';

// Own Style Sheet
import './mainstyle.css';

class Main extends Component {
 constructor() {
  super();
  this.state = {
   topText: '',
   botText: '',
   allMemeImgs: [],
   randomImg: ''
  };

  this.handleClick = this.handleClick.bind(this);
  this.handleTopTChange = this.handleTopTChange.bind(this);
  this.handleBotTChange = this.handleBotTChange.bind(this);
 }

 handleTopTChange(e) {
  this.setState({
   topText: e.target.value
  })
 }

 handleBotTChange(e) {
  this.setState({
   botText: e.target.value
  })
 }

 handleClick(e) {
  e.preventDefault()
 }

 componentDidMount() {
  
 }

 render() {
  const { topText, botText } = this.state;
  return (
    <main className="main-container">
      <form className="meme-form">
       <label htmlFor="input">Top text:</label>
        <input
         type="text"
         placeholder="Set Top Text"
         value={topText}
         onChange={this.handleTopTChange}
        />
        <label htmlFor="input">Bottom text:</label>
        <input
         type="text"
         placeholder="Set Bottom Text"
         value={botText}
         onChange={this.handleBotTChange}
        />
        <button onClick={this.handleClick}>Generate</button>
      </form>
    </main>
   )
  }
 }
export default Main;