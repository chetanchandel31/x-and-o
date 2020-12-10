import React from 'react';

function TwoPlayer (props) {
     return (
          <div>
                First Player's Name(X):<br/> <input onChange={({target}) => props.changeNames(target.value, 'playerOne') } placeholder="enter player1's name" /> <br/>
                Second Player's Name(O):<br/> <input onChange={({target}) => props.changeNames(target.value, 'playerTwo')} placeholder="enter player2's name" /> <br/>
                <button onClick={() => props.setCurrentScreen('game')}>Play !</button> 
           </div>
     )
}

function EasyAI (props) {
     return (
          <div>
                Player's Name(X): <br/> <input onChange={({target}) => props.changeNames(target.value, 'playerOne')} placeholder='enter your name' /> <br/>
                <button onClick={() => props.setCurrentScreen('aiGame')}>Play against A.I. !</button>
           </div>
     )
}

function IntermediateAI (props) {
     return (
          <div>
                Player's Name(X): <br/> <input onChange={({target}) => props.changeNames(target.value, 'playerOne')} placeholder='enter your name' /> <br/>
                <button onClick={() => props.setCurrentScreen('HardAiGame')}>Play against intermediate A.I. !</button>
           </div>
     )
}

export default function HomePage (props) {
     const [currentMode, setCurrentMode] = React.useState(null);

     const setCurrentScreen = props.setCurrentScreen;
     const changeNames = props.changeNames;

    return (
        <div>
          <div onChange={(e) => setCurrentMode(e.target.value)}>
               <input type="radio" name='toggle' value='twoPlayer' /> Against friend (offline)
               <input type="radio" name='toggle' value='easyAI' /> Against easy A.I.
               <input type="radio" name='toggle' value='intermediateAI' /> Against intermediate A.I.
          </div>
          {currentMode === 'twoPlayer'? <TwoPlayer setCurrentScreen={setCurrentScreen} changeNames={changeNames}/>:
          currentMode === 'easyAI'? <EasyAI setCurrentScreen={setCurrentScreen} changeNames={changeNames}/>:
          currentMode === 'intermediateAI'? <IntermediateAI setCurrentScreen={setCurrentScreen} changeNames={changeNames}/>:
          null}
           <div>
                After first game if you don't fill a new name, name from your previous game will be used. <br/>
                So you don't have to enter name(s) again and again.
           </div>
        </div>
    )
}