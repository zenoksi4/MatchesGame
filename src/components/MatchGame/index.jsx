import styles from './styles.module.css'


function MatchGame() {

  return (
    <div className={styles.gameWrapper}>
        <div className={styles.playerBox}>
            <h2 className={styles.titleBox}>Player took</h2>
            <div className={styles.choice}>
                <h2 className={styles.numberMatches}>2</h2>
            </div>
        </div>

        <div className={styles.gameBox}>
            <h2 className={styles.titleBox}>Matches</h2>
            <div className={styles.choice}>
            <h2 className={styles.numberMatches}>2</h2>

            </div>

        </div>

        <div className={styles.aiBox}>
            <h2 className={styles.titleBox}>AI took</h2>
            <div className={styles.choice}>
            <h2 className={styles.numberMatches}>2</h2>

            </div>
        </div>
    </div>
  );
}

export default MatchGame;
