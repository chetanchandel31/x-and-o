import React from 'react';
import style from './grid.module.css'

export default function Grid (props) {
    const renderText = (value) => {
        if (value === 'X') {
            return 'X'
        } else if (value === 'O') {
            return 'O'
        } else {
            return null
        }
    }

    const isWinningIndex = (index) => {
        return props.winningIndex.includes(index);
    } 

    const gridCells = props.positions.map((value, index) => (
        <div className={isWinningIndex(index)? style.winnerCell: null} key={index} onClick={() => props.playerClicks(index)}>
            {renderText(value)}
        </div>
    ) )

    const renderName = () => {
        if (props.turn === 'X'){
            return props.playerNames.playerOne;
        } else {
            return props.playerNames.playerTwo;
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
                <>{`${props.playerNames.playerOne}(X) won. `}<div>Click on 'end' to start another game.</div></>:
                props.winner === 'O'?
                <>{`${props.playerNames.playerTwo}(O) won. `} <div>Click on 'end' to start another game.</div></> :
                props.winner === 'draw'?
                <>{`Its a draw ! `} <div>Click on 'end' to start another game.</div></>:
                null }
            </h3>
        </>
    )
}

