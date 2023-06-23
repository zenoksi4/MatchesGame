import { useEffect, useState } from 'react';
import styles from './styles.module.css'
import Button from '../Button';
import PlayerInput from '../PlayerInput';


function MatchGame({numMatch, mod, maxTake}) {
    const [isStartGame, setIsStartGame] = useState(false);
    const [playerTook, setPlayerTook] = useState(0);
    const [aiTook, setAiTook] = useState(0);
    const [gameNumMatch, setGameNumMatch] = useState(2*numMatch+1);
    const [currentPlayer, setCurrentPlayer] = useState(mod)

    const aiStrategy = (gameNumMatch) => {
        if (gameNumMatch % 2 === 0) {
            if(gameNumMatch === 0){
                return;
            }

            setAiTook(aiTook+1);
            setGameNumMatch(gameNumMatch-1)
          } else {

            setAiTook(aiTook + Math.min(maxTake, gameNumMatch));
            setGameNumMatch(gameNumMatch-Math.min(maxTake, gameNumMatch))
          }
      };

    const GameHandler = () => {

        setIsStartGame(!isStartGame);
    }

    useEffect(()=>{
        setPlayerTook(0);
        setAiTook(0);
        setGameNumMatch(2*numMatch+1);
        setCurrentPlayer(mod);


    },[mod, numMatch, maxTake, isStartGame])
    

    useEffect(()=>{
        if(isStartGame && currentPlayer) {
            aiStrategy(gameNumMatch)  
            setCurrentPlayer(false)  
        }


    },[isStartGame, currentPlayer])

  return (
    <>
        <div className={styles.gameBtn}>
            {isStartGame?
                <Button onClick={GameHandler}>Restart Game</Button>:
                <Button onClick={GameHandler}>Start Game</Button>
            }
        </div>
        
        <div className={styles.gameWrapper}>
            <div className={styles.playerBox}>
                <h2 className={styles.titleBox}>Player took</h2>
                <div className={styles.choice}>
                    <h2 className={styles.numberMatches}>{playerTook}</h2>
                </div>
            </div>

            <div className={styles.gameBox}>
                <h2 className={styles.titleBox}>Matches</h2>
                <div className={styles.choice}>
                <h2 className={styles.numberMatches}>{gameNumMatch}</h2>

                </div>

            </div>

            <div className={styles.aiBox}>
                <h2 className={styles.titleBox}>AI took</h2>
                <div className={styles.choice}>
                <h2 className={styles.numberMatches}>{aiTook}</h2>

                </div>
            </div>
        </div>
      {
        isStartGame &&
            <PlayerInput 
            maxTake={maxTake} 
            setPlayerTook={setPlayerTook}
            playerTook={playerTook}
            gameNumMatch={gameNumMatch}
            setGameNumMatch={setGameNumMatch}
            setCurrentPlayer={setCurrentPlayer}
        />
      }


    </>
  );
}

export default MatchGame;
