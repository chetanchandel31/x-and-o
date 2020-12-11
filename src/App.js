import React from 'react';
import AiGame from './components/gameComponents/AIgame';
import Game from './components/gameComponents/Game';
import HardAiGame from './components/gameComponents/HardAiGame';
import HomePage from './components/HomePage';
import style from './component.module.css';

export default function App () {
    const [currentScreen, setCurrentScreen] = React.useState('homepage');
    const [playerNames, setPlayerNames] = React.useState({
        playerOne: '',
        playerTwo: ''
    });

    const changeNames = (name, ofThisPlayer) => {
        setPlayerNames(prevNames => ({
            ...prevNames,
            [ofThisPlayer]: name
        }))
    }

    const renderCurrentScreen = () => {
        if (currentScreen === 'game') {
            return <Game setCurrentScreen={setCurrentScreen} playerNames={playerNames}/>
        } 
        else if(currentScreen === 'aiGame') {
            return <AiGame setCurrentScreen={setCurrentScreen} playerNames={playerNames}/>
        } else if(currentScreen === 'HardAiGame') {
            return <HardAiGame setCurrentScreen={setCurrentScreen} playerNames={playerNames} />
        } else {
            return <HomePage setCurrentScreen={setCurrentScreen} playerNames={playerNames} changeNames={changeNames}/>
        }
    }

    return (
        <div>
            <header className={style.header}>
                <h1>X and O's</h1>
            </header>
            {renderCurrentScreen()}
        </div>
    )
}