import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import ScoreBar from "./components/ScoreBar";
import GokuCard from './components/GokuCard/GokuCard';
import goku from "./goku.json"

class App extends Component {
  state = {
    goku,
    currentScore: 0,
    bestScore: 0,
    message: "Click a Goku to Begin! Don't click the same Goku form twice!",
  }

  clickGoku = id => {
    const gokuClick = this.state.goku.filter(player => player.id === id);
    console.log (gokuClick[0].clicked);
    this.gokuShuffle(goku)
    if (gokuClick[0].clicked === false) {
      gokuClick[0].clicked = true;
      let newScore = this.state.currentScore + 1
      let newBestScore = (newScore > this.state.bestScore) ? newScore : this.state.bestScore
      this.setState({
        currentScore: newScore,
        bestScore: newBestScore,
        message: "Good Job! Keep going!",
      })
    }
    else {
      this.setState({
        currentScore:0,
        message: "Game over, click a Goku to start over!",
        goku: goku.map(goku => ({...goku, clicked: false}))
      })
    }
  }

  gokuShuffle = array => {
    for (let i = array.length - 1; i> 0; i--) {
      let j = Math.floor(Math.random() * (i +1));
      [array[i], array[j]] = [array[j], array[i]]
    }
  }

  render() {
    return (
      <div>
        <ScoreBar
          currentScore={this.state.currentScore}
          bestScore={this.state.bestScore}
          message={this.state.message}
        />
        <Wrapper>
          {this.state.goku.map(goku => (
            <GokuCard
              id={goku.id}
              key={goku.id}
              name={goku.name}
              image={goku.image}
              clickGoku = {this.clickGoku}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
