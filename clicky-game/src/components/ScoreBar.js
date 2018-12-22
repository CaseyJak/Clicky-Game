import React from "react";

function ScoreBar(props) {
    return (<header>
        <div>
            <h1>Clicky-Game</h1>
            <div>
                {props.message}
            </div>
            <score>
                Current Score: {props.currentScore} | Best Score: {props.bestScore}
            </score>
        </div>
    </header>)
}

export default ScoreBar 