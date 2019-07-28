import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import FriendCard from "./components/FriendCard";
import Title from "./components/Title"
import logo from './logo.png';
import friends from "./characters.json"
import './App.css';
import GameContainer from "./components/GameContainer"
import Navbar from "./components/Navbar"

let shuffle = require('shuffle-array')
let clickedArray = [];

class App extends Component {
  state = {
    friends: friends,
    clicked: [],
    lost: false,
    score: 0,
    highScore: 0,
    answer: ""
  }
  componentDidUpdate() {
    shuffle(this.state.friends);
  }
  checkforHighScore = () => {
    console.log("checking high score");
    if (this.state.score > this.state.highScore) {
      this.setState({ highScore: this.state.score })
    }
  }
  checkforDupes = id => {
    console.log("clicked list: ", this.state.clicked);
    if (this.state.clicked.includes(id)) {
      this.setState({ lost: true })
      this.setState({ score: 0 })
      this.setState({ answer: "Darn! You Lost :(" })
      this.setState({ clicked: [] })
      clickedArray = [];
      console.log("duplicate clicked : game over : restarting");
    }
    else {
      this.setState({ score: this.state.score + 1 })
      this.checkforHighScore();
      this.setState({ answer: "Nice! Guess again :)" })
      //need to do the shuffling function here
      const clicked = this.state.friends.filter(friend => friend.id === id);
      clickedArray.push(clicked[0].id);
      console.log("clicked: ", clicked);
      this.setState({ clicked: clickedArray });
    }
  }
  registerClick = id => {
    console.log("id: ", id);
    this.checkforDupes(id);
  }
  registerHover = id => {
    console.log("hover: ", id);
  }
  render() {
    return (
      <div className="App">
        <Navbar
          highScore={this.state.highScore}
          score={this.state.score}
          answer={this.state.answer}
        />
        <header className="App-header">
          <div id="title">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 id="App-title">
              X-men Memory Game
        </h1>
          </div>
        </header>
        <div id="gameArea">
          <Wrapper>
            <Title>Click a Character!</Title>
            <GameContainer
            >
              {this.state.friends.map(friend => (
                <FriendCard
                  id={friend.id}
                  key={friend.id}
                  name={friend.name}
                  registerClick={this.registerClick}
                  registerHover={this.registerHover}
                  image={friend.image} />
              ))}
            </GameContainer>
          </Wrapper>
        </div>
      </div>
    );
  }
}
export default App;
