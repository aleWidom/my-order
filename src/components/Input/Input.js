import React from 'react';
import styles from "./Input.module.css";



const Input = ({ handleChange, valueInput, label, placeholder, children, error, msgError }) => {
    return (
        <div className={styles.container}>
            <label className={styles.label}>{label}</label>
            <div className={styles.containerInputLink}>
                <input onChange={handleChange} value={valueInput} placeholder={placeholder} className={styles.input} />
                {children}
            </div>
            {error ?
                <span className={styles.error}>{msgError}</span> :
                ""
            }
        </div>
    )
};

export default Input;
