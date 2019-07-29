import React, { Component } from 'react';

import './mainstyle.css';

import { getImg } from '../../utils/api.js';


class Main extends Component {
 constructor() {
  super()
  this.state = {
   topText: '',
   botText: '',
   allMemeImgs: [],
   randomImg: ''
  };

  this.handleClick = this.handleClick.bind(this);
  this.handleChange = this.handleChange.bind(this);
 }
 componentDidMount() {
  getImg().then( data => {
   this.setState({
     allMemeImgs: data.data.memes
   });
    console.log(this.state.allMemeImgs)
  })
 }
 handleChange(e) {
  const { name, value } = e.target;
  this.setState({
   [name]: value
  })
 }
 handleClick(e) {
  e.preventDefault();
  const { allMemeImgs } = this.state;
  const randNum = Math.floor(Math.random() * allMemeImgs.length );
  const randMemeImg = allMemeImgs[randNum].url;
  console.log(randMemeImg)
  this.setState({
    randomImg: randMemeImg
  })
 }
 render() {
  const { topText, botText, randomImg } = this.state;
  return (
    <div>
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
      <div className="meme">
       <img src={randomImg} alt=""/>
       <h2 className="top">{topText}</h2>
       <h2 className="bot">{botText}</h2>
      </div>
    </div>
   )
  }
 }
export default Main;