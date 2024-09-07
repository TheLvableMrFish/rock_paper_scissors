import React from "react";

const Header =({score})=>{

    return(
        <>
            <div className="container">
                <div className="row game-header">
                    <div className="col-12 col-lg-10 ">
                        <ol>
                            <li className="character-name">Rock</li>
                            <li className="character-name">Paper</li>
                            <li className="character-name">Sicssors</li>
                            <li className="character-name">Lizard</li>
                            <li className="character-name">Spock</li>
                        </ol>
                    </div>
                    <div className="col-12 col-lg-2 score-board-header">
                        <div className="score-board">
                            <div className="score-header">Score</div>
                            <div className="score">{score}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header