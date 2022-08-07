import React, { useContext } from 'react';
import { InputContext } from '../../context/input';
import { useFetchTables } from '../../hooks/useFetchTables';
import styles from "./Input.module.css";

const Input = ({ label, placeholder, setTable, children }) => {

    const { valueInput, setValueInput, error, msgError, setErrInput } = useContext(InputContext)

    const { tablesId1Restaurant } = useFetchTables()

    const handleChange = (e) => {
        setValueInput(e.target.value)
        setTable('')
        if (e.target.value.length > 2) {
            const value = e.target.value
            const tableNumberEntered = tablesId1Restaurant.find((e) => e.table_number.toUpperCase() === value.toUpperCase() && e.table_active === 0)
            if (tableNumberEntered !== undefined) {
                setTable(tableNumberEntered)
                setErrInput(false)
            }
        }
    }

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
