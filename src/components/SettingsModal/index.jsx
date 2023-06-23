import { useState } from 'react';
import BackDropModal from '../BackDropModal';
import Button from '../Button';
import Input from '../Input';
import styles from './styles.module.css'


function SettingsModal({
  closeModal, 
  numMatch, 
  setNumMatch,
  maxTake,
  setMaxTake,
  mod,
  setMod,
  setIsModalOpen
}) {
  const [numMatchInput, setNumMatchInput] = useState(numMatch);
  const [maxTakeInput, setMaxTakeInput] = useState(maxTake);
  const [modInput, setModInput] = useState(mod);

  const numMatchHandler = (e) =>{
    setNumMatchInput(e.target.value);
  }

  const maxTakeHandler = (e) =>{
    setMaxTakeInput(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setNumMatch(numMatchInput);
    setMaxTake(maxTakeInput);
    setMod(modInput);
    setIsModalOpen(false);

  }
  
  const selectModHandler = () => {
    setModInput(!modInput);
  }

  return (
    <BackDropModal>
        <div className={styles.settingsWrapper}>
            <form className={styles.settingsFields} onSubmit={submitHandler}>
                <h1>Game Settings</h1>

                <label>Number of all matches (2n+1) <br/>n=</label>
                <Input value={numMatchInput} onChange={numMatchHandler}/>
                <label>Number of matches that can be pulled out</label>
                <Input value={maxTakeInput} onChange={maxTakeHandler}/>

                <div className={styles.gameModes}>
                    <Button onClick={selectModHandler} className={modInput && styles.active}>First AI</Button>
                    <Button onClick={selectModHandler} className={!modInput && styles.active}>First player</Button>
                </div> 
                <div className={styles.submitBtn}>
                  <Button type='submit'>Select</Button> 
                </div>
            </form>

            <Button className={styles.closeModalButton} onClick={closeModal}>Close</Button>
        </div>
    </BackDropModal>
  );  
}

export default SettingsModal;
