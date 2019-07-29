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
  this.handleChange = this.handleChange.bind(this);
 }

 handleChange(event) {
  const { name, value } = event.target;
  this.setState({
   [name]: value
  })
 }

 handleClick(e) {
  e.preventDefault();
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
         name="topText"
         placeholder="Set Top Text"
         value={topText}
         onChange={this.handleChange}
        />
        <label htmlFor="input">Bottom text:</label>
        <input
         type="text"
         name="botText"
         placeholder="Set Bottom Text"
         value={botText}
         onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Generate</button>
      </form>

      <h2>{topText}</h2>
      <h2>{botText}</h2>
    </main>
   )
  }
 }
export default Main;