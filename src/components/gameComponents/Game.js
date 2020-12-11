import React from 'react'
import Grid from '../gridComponents/grid';
import style from '../gridComponents/grid.module.css'

function Game(props) {
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
    if (data.positions[index] === null && data.winner === '') {
      setData((prevData) => {
        const newData = {...prevData};
        newData.positions[index] = newData.turn;//play turn
        winCombos.forEach(combo => {
          const [a, b, c] = combo;
          if (newData.positions[a] && newData.positions[a] === newData.positions[b] && newData.positions[a] === newData.positions[c]) {
            newData.winner = newData.turn;
            newData.winningIndex = [a, b, c];
          } else if(newData.winner === '' && newData.positions.filter(value => value !== null).length === 9) {
            newData.winner = 'draw';//check for win/draw
          }
        })
        newData.turn = newData.turn === 'X'? 'O': 'X';//switch turn
        return newData
      })
    }
  }

  const playerNames = props.playerNames;

  return (
  <div style={{textAlign:"center"}}>
    <button className={style.endBtn} onClick={() => props.setCurrentScreen('homepage')}>End</button>
    <Grid positions={data.positions}
  playerClicks={handleClick}
  winner={data.winner}
  winningIndex={data.winningIndex}
  turn={data.turn}
  playerNames={playerNames}/> 
  </div>   
  );
}

export default Game;