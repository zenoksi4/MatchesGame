import BackDropModal from "../BackDropModal";
import Button from "../Button";
import styles from "./styles.module.css";

function EndGameModal({ setEndGame, aiTook, playerTook }) {
  const closeModal = () => {
    setEndGame(false);
  };

  return (
    <BackDropModal>
      <div className={styles.endGameContainer}>
        {!(aiTook % 2) && <h2 className={styles.winner}>AI win!</h2>}
        {!(playerTook % 2) && <h2>You win!</h2>}

        <Button onClick={closeModal}>Close</Button>
      </div>
    </BackDropModal>
  );
}

export default EndGameModal;
