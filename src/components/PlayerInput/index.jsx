import Button from '../Button';
import Input from '../Input';
import styles from './styles.module.css'


function PlayerInput() {

  return (
    <form className={styles.inputWrapper}>
        <label>Choose matches</label>
        <Input className={styles.input}/>
        <Button>Choose</Button>
    </form>
  );
}

export default PlayerInput;
