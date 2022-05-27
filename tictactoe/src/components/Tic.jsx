import React, { useEffect, useState } from 'react'
import Srt from '../Srt';
import styles from './Tic.module.css'


const cls=[]
export const Tic = () => {

    const[game,setGame]=useState(cls)
    const[change,setChange]=useState(0);

const handleonClicked=(i)=>{
let str=Array.from(game);
if(str[i])return;
str[i]=change?"X":"0"
setChange(!change)
setGame(str)
}

    const clear=()=>{
        setGame(cls);
    }

useEffect(()=>{
   let x=checkWin()
    if(x){
        clear();
        alert(`congratulations! ${x} you won the game.`)
    }
},[game])

const checkWin=()=>{
    const rows=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,5,8],
        [0,4,8],
        [2,4,6],
     ];
        console.log(`Class:App,Function: checkWin==`,game[0],game[1],game[2]);
        
        for(let i=0;i<rows.length;i++){
            const[a,b,c]=rows[i];
            if(game[a]&&game[a]===game[b] && game[a]===game[c]){
                return game[a]
            }
        }
        return null;
}

  return (
    <div>

<div className={styles.tic}>
            
            <div className={styles.line}>
                <Srt className={styles.bbright} onClick={() => handleonClicked(0)} state={game[0]}/>
                <Srt className={styles.bbright} onClick={() => handleonClicked(1)} state={game[1]}/>
                <Srt className={styles.bbottom} onClick={() => handleonClicked(2)} state={game[2]}/>
            </div>
            <div className={styles.line}>
                <Srt className={styles.bbright} onClick={() => handleonClicked(3)} state={game[3]}/>
                <Srt className={styles.bbright} onClick={() => handleonClicked(4)} state={game[4]}/>
                <Srt className={styles.bbottom} onClick={() => handleonClicked(5)} state={game[5]}/>
            </div>
            <div className={styles.line}>
                <Srt className={styles.bright} onClick={() => handleonClicked(6)} state={game[6]}/>
                <Srt className={styles.bright} onClick={() => handleonClicked(7)} state={game[7]}/>
                <Srt onClick={() => handleonClicked(8)} state={game[8]}/>
            </div>
            <button className={styles.clearbtn} onClick={clear}>Reset</button>
           
         
        </div>

    </div>
  )
}
