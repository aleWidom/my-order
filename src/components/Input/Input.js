import React, { useContext } from 'react';
import { FaSearch } from "react-icons/fa";
import { InputContext } from '../../context/input';
import { useFetchTables } from '../../hooks/useFetchTables';
import styles from "./Input.module.css";

const Input = ({setTable }) => {

    const { valueInput, setValueInput, errInput, setErrInput } = useContext(InputContext)

    const { tablesId1Restaurant } = useFetchTables()

    const handleChange = (e) => {
        setValueInput(e.target.value)
        setTable('')
        if (e.target.value.length > 2) {
            const value = e.target.value
            const tableNumberEntered = tablesId1Restaurant.find((e) => e.table_number.toUpperCase() === value.toUpperCase() && e.table_active === 1)
            if (tableNumberEntered !== undefined) {
                console.log(tableNumberEntered)
                setTable(tableNumberEntered)
                setErrInput("")
            }
        }
    }

    return (
        <div className={styles.container}>
           <div className={styles.containerInputSearch}>
           <input onChange={handleChange} value={valueInput} placeholder={"Buscar..."} className={styles.input} />
            <FaSearch className={styles.search}/>
            {errInput !== '' ?
                <span className={styles.error}>{errInput}</span> :
                ""
            }
           </div>
        </div>
    )
};

export default Input;
