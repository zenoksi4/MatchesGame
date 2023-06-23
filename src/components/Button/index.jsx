import styles from './styles.module.css'



function Button({ 
    className,
    children,
    onClick = () => {},
    type = "button"
  }) {
    return (
        <>
      <button 
        className={`${styles.button} ${className}`} 
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
      </>
    );
  }
  
export default Button;