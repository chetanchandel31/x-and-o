import React from 'react';
import style from './grid.module.css';

export default function Grid (props) {

    const isWinningIndex = (index) => {
        return props.winningIndex.includes(index);
    } 

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

    const gridCells = props.positions.map((value, index) => (
        <div className={isWinningIndex(index)? style.winnerCell: null} key={index} 
        onClick={() => {
            const isAlreadyClicked = props.positions[index];
            if (isAlreadyClicked !== null) return;
            if (props.winner !== '') return;
            props.playerClicks(index);
            //find potential win
            const newBoard = props.positions;
            newBoard[index] = 'X';

            //checking for AI's win in next move
            const winningMoves = [];
            winCombos.forEach(combo => {
                const [a, b, c] = combo;
                if ((newBoard[a] === newBoard[b] && newBoard[a] === 'O') || (newBoard[b] === newBoard[c] && newBoard[b] === 'O') || (newBoard[c] === newBoard[a] && newBoard[c] === 'O')) {
                    const goodIndex = [a, b, c].filter(box => newBoard[box] === null);
                    // console.log(a, b, c)
                    // console.log(goodIndex)
                    if (goodIndex.length >= 1) winningMoves.push(goodIndex[0]);
                }
            })

            //return indexes of empty boxes
            const unclickedIndexes = [];
            for (var i=0; i<props.positions.length; i++) {
                if (props.positions[i] === null && i !== index) unclickedIndexes.push(i);
            }
            const randomUnclickedIndex = Math.floor(Math.random()* unclickedIndexes.length);

            //checking for player's win in next move
            if (winningMoves.length === 0) {
                winCombos.forEach(combo => {
                    const [a, b, c] = combo;
                    if ((newBoard[a] === newBoard[b] && newBoard[a] !== null) || (newBoard[b] === newBoard[c] && newBoard[b] !== null) || (newBoard[c] === newBoard[a] && newBoard[c] !== null)) {
                        const goodIndex = [a, b, c].filter(box => newBoard[box] === null);
                        // console.log(a, b, c)
                        // console.log(goodIndex)
                        if (goodIndex.length >= 1) winningMoves.push(goodIndex[0]);
                    }
                })
            }

             console.log(winningMoves[0], winningMoves[1]);
             const winningBoxIndex = winningMoves[0];

            if (winningBoxIndex || winningBoxIndex === 0) {
                setTimeout(() => {props.playerClicks(winningBoxIndex)}, 1);
            } else {
                setTimeout(() => {props.playerClicks(unclickedIndexes[randomUnclickedIndex])}, 1);
            }
        }}>
            {value}
        </div>
    ) )

    const renderName = () => {
        if (props.turn === 'X'){
            return props.playerNames.playerOne;
        } else {
            return 'Mukesh';
        }
    }

    return (
        <>
            <div className={style.container}>
                {gridCells}
            </div>
            {props.winner === ''? <h3 className={style.gameInfo}>{renderName()}({props.turn})'s turn to play</h3>: null}
            <h3 className={style.gameInfo}>
                {props.winner === 'X' ?
                <>{`${props.playerNames.playerOne}(X) won.`} <div>Click on 'end' to start another game.</div> </>:
                props.winner === 'O'?
                <>{`Mukesh(O) won.`} <div>Click on 'end' to start another game.</div></>:
                props.winner === 'draw'?
                <>{'Its a draw !'} <div>Click on 'end' to start another game.</div></> :
                null }
            </h3>
        </>
    )
}