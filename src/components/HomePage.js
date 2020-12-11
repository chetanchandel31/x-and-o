import React from 'react';
import style from '../component.module.css'

function TwoPlayer (props) {
     return (
          <div class={style.jumbotron}>
               <div> 
                   This will be like a traditional game of X and O's, only difference being your device used instead of paper.
               </div>
               <hr class={style.hr}></hr>

                First Player's Name(X):<br/> <input onChange={({target}) => props.changeNames(target.value, 'playerOne') } 
                className={style.input}
                placeholder="enter player1's name" /> <br/>
                Second Player's Name(O):<br/> <input onChange={({target}) => props.changeNames(target.value, 'playerTwo')} 
                className={style.input}
                placeholder="enter player2's name" /> <br/>
                <button className={style.playBtn} onClick={() => props.setCurrentScreen('game')}>Play !</button> 
           </div>
     )
}

function EasyAI (props) {
     return (
          <div class={style.jumbotron}>
               <div> 
                    Play against Khalid, an alien from Mars who likes to believe he is much smarter than us Earthlings.
               </div>
               <div>
                    It's not very hard to prove him wrong though.
               </div>
               <hr class={style.hr}></hr>
                Player's Name(X): <br/> <input onChange={({target}) => props.changeNames(target.value, 'playerOne')}
                className={style.input}
                placeholder='enter your name' /> <br/>
                <button className={style.playBtn} onClick={() => props.setCurrentScreen('aiGame')}>Play !</button>
           </div>
     )
}

function IntermediateAI (props) {
     return (
          <div class={style.jumbotron}>
              <div> Play against Mukesh, an Indian who has spent 169 years in Himalyan caves sharpening his cognitive skills.</div>
              <div>In this mode he won't be playing seriously but he can still give you a hard time if you take him too lightly.</div>
               <hr class={style.hr}></hr>
                Player's Name(X): <br/> <input onChange={({target}) => props.changeNames(target.value, 'playerOne')}
                className={style.input}
                placeholder='enter your name' /> <br/>
                <button className={style.playBtn} onClick={() => props.setCurrentScreen('HardAiGame')}>Play !</button>
           </div>
     )
}

export default function HomePage (props) {
     const [currentMode, setCurrentMode] = React.useState(null);

     const setCurrentScreen = props.setCurrentScreen;
     const changeNames = props.changeNames;

    return (
        <div>
          <p>Choose who you want to play against</p>
          <div className={style.containerBtn}>
               <button className={currentMode === 'twoPlayer'? style.btnSelected:  style.btn}
               onClick={() => setCurrentMode('twoPlayer')}>friend(offline)</button>
               <button className={currentMode === 'easyAI'? style.btnSelected:  style.btn}
               onClick={() => setCurrentMode('easyAI')}>easy A.I.</button>
               <button className={currentMode === 'intermediateAI'? style.btnSelected:  style.btn}
               onClick={() => setCurrentMode('intermediateAI')}>intermediate A.I.</button>
          </div>
          
          <div className={style.containerCenter}>
               {currentMode === 'twoPlayer'? <TwoPlayer setCurrentScreen={setCurrentScreen} changeNames={changeNames}/>:
               currentMode === 'easyAI'? <EasyAI setCurrentScreen={setCurrentScreen} changeNames={changeNames}/>:
               currentMode === 'intermediateAI'? <IntermediateAI setCurrentScreen={setCurrentScreen} changeNames={changeNames}/>:
               null}
          </div>

           <div className={style.containerCenter}>
                <p>
                After first game if you don't fill a new name, name from your previous game will be used. <br/>
                So you don't have to enter name(s) again and again.
                </p>
           </div>
        </div>
    )
}