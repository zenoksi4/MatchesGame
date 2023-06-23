import ReactDom from "react-dom";
import styles from './styles.module.css'



const Modal = ({children}) => {
    return (
      <div className={styles.backDrop}>
        {children}
      </div>
    );
  };



function BackDropModal(props) {
  return (
    <>
      {ReactDom.createPortal(
        <Modal {...props} />,
        document.getElementById("modal")
      )}
    </>
  );
}

export default BackDropModal;
