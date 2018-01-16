import React, { Component } from 'react'; 
import Board from './Board';

class Game extends Component {


render() {
    return( 
        <div>  
            <h1>GAME TIC TAC</h1>
            <div className="game" >
            
                <div className="game-board">
                    <Board />
                </div> 
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div> 
        </div>
    );
}
}

export default Game;
