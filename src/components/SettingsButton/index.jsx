import Button from "../Button";
import styles from "./styles.module.css";

function SettingsButton({ openModal }) {
  return (
    <>
      <h1 className={styles.titleGame}>Matches Game</h1>

      <div className={styles.settingsButton}>
        <Button onClick={openModal}>Settings</Button>
      </div>
    </>
  );
}

export default SettingsButton;
