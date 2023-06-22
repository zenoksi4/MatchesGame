import BackDropModal from '../BackDropModal';
import Button from '../Button';
import Input from '../Input';
import styles from './styles.module.css'


function SettingsModal({closeModal}) {

  return (
    <BackDropModal>
        <div className={styles.settingsWrapper}>
            <div className={styles.settingsFields}>
                <h1>Game Settings</h1>

                <label>Matches</label>
                <Input/>
                <label>Allowed number of matches to extract</label>
                <Input/>

                <div className={styles.gameModes}>
                    <Button className={styles.active}>First AI</Button>
                    <Button>First player</Button>
                </div>
            </div>

            <Button className={styles.closeModalButton} onClick={closeModal}>Close</Button>
        </div>
    </BackDropModal>
  );
}

export default SettingsModal;
