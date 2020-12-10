import React from 'react'
import HardAigrid from '../gridComponents/hardAiGrid';


function AiGame(props) {
  const [data, setData] = React.useState({
    winner: '',
    winningIndex: [],
    turn: 'X',
    positions: new Array(9).fill(null)
  });

  const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const handleClick = (index) => {
    if (data.positions[index] === null ) {//REMOVING THIS IF CONDITION
      setData((prevData) => {
        const newData = {...prevData};
        if (newData.winner === '' ) {
          //AND PUTTING IT HERE(like check win condition) DOESN'T WORKS, DON'T KNOW WHY (maybe same reason why 'check win' didn't work above)
        newData.positions[index] = newData.turn; //play move
        
        //check for win/draw
        winCombos.forEach(combo => {
          const [a, b, c] = combo;
          if (newData.positions[a] && newData.positions[a] === newData.positions[b] && newData.positions[a] === newData.positions[c]) {
            newData.winner = newData.turn;
            newData.winningIndex = [a, b, c];
          } else if(newData.winner === '' && newData.positions.filter(value => value !== null).length === 9) {
            newData.winner = 'draw';
          }
        })
        newData.turn = newData.turn === 'X'? 'O': 'X';//change turn
        } 
        return newData
      })
    }
  }

  
  const playerNames = props.playerNames;

  return (
  <div>
    <button onClick={() => props.setCurrentScreen('homepage')}>End</button>
    this is hard ai game component  <br/>
    <HardAigrid positions={data.positions}
  winner={data.winner}
  winningIndex={data.winningIndex}
  turn={data.turn}
  playerNames={playerNames}
  playerClicks={handleClick}/> 
  </div>   
  );
}

export default AiGame;