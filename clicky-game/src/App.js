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
    message: "Click a Goku to Begin! Don't click the same Goku form twice!"
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
              name={goku.name}
              image={goku.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
