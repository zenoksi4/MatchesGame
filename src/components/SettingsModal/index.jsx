import BackDropModal from '../BackDropModal';
import Button from '../Button';
import Input from '../Input';
import styles from './styles.module.css'


function SettingsModal({closeModal}) {

  return (
    <BackDropModal>
        <div className={styles.settingsWrapper}>
            <form className={styles.settingsFields}>
                <h1>Game Settings</h1>

                <label>Number of all matches</label>
                <Input/>
                <label>Number of matches that can be pulled out</label>
                <Input/>

                <div className={styles.gameModes}>
                    <Button className={styles.active}>First AI</Button>
                    <Button>First player</Button>
                </div> 
                <div className={styles.submitBtn}>
                  <Button>Select</Button> 
                </div>
            </form>

            <Button className={styles.closeModalButton} onClick={closeModal}>Close</Button>
        </div>
    </BackDropModal>
  );
}

export default SettingsModal;
