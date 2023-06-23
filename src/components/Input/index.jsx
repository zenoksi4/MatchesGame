import styles from './styles.module.css'

const Input = ({
    type = 'number',
    name = '',
    max,
    className = '',
    classNameWrapper = '',
    placeholder = '',
    value,
    onChange = () => null,
    pattern
}) => {

    return (
        <div className={ `${styles.container} ${classNameWrapper}`}>
            <input 
                type={ type }
                name={ name }
                value={value}
                min={1}
                max={max}
                pattern={pattern}
                placeholder={ placeholder }
                onChange={ onChange }
                className={`${styles.input} ${className}`}
            />
        </div>
    )
}

export default Input;