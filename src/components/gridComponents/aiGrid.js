import React from 'react';
import style from './grid.module.css'

export default function Grid (props) {

    const isWinningIndex = (index) => {
        return props.winningIndex.includes(index);
    } 

    const gridCells = props.positions.map((value, index) => (
        <div className={isWinningIndex(index)? style.winnerCell: null} key={index} 
        onClick={() => {
            const isAlreadyClicked = props.positions[index];
            props.playerClicks(index);

            if (isAlreadyClicked !== null) return;

            const unclickedIndexes = [];
            for (var i=0; i<props.positions.length; i++) {
                if (props.positions[i] === null && i !== index) unclickedIndexes.push(i);
            }
            const randomUnclickedIndex = Math.floor(Math.random()* unclickedIndexes.length);
            setTimeout(() => {props.playerClicks(unclickedIndexes[randomUnclickedIndex])}, 1);
        }}>
            {value}
        </div>
    ) )

    const renderName = () => {
        if (props.turn === 'X'){
            return props.playerNames.playerOne;
        } else {
            return 'Khalid';
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
                <>{`${props.playerNames.playerOne}(X) won`} <p>Click on 'end' to start another game.</p></>:
                props.winner === 'O'?
                <>{`Khalid(O) won`} <p>Click on 'end' to start another game.</p></>:
                props.winner === 'draw'?
                <>{'Its a draw !'} <p>Click on 'end' to start another game.</p></>:
                null }
            </h3>
        </>
    )
}