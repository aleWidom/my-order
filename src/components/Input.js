import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Input.module.css";

import { useState } from 'react';
import { updateTableNumberActive } from '../services/tables';


const Input = ({ table, setTable, tablesId1Restaurant }) => {

    const [valueInput, setValueInput] = useState("")

    const handleChange = (e) => {
        setValueInput(e.target.value)
        setTable("")
        const value = e.target.value
        const tableNumberEntered = tablesId1Restaurant.find((e) => e.table_number.toUpperCase() === value.toUpperCase() && e.table_active === 0)
        tableNumberEntered !== undefined && setTable(tableNumberEntered)
    }

    const handleClick = () => {
        updateTableNumberActive(table)
            .then((data) => setTable(data))
            .catch((err) => err)

    }

    return (
        <div className={styles.container}>
            <p>Por favor ingresá tu número de mesa.</p>
            <div className={styles.containerInput}>
                <input onChange={handleChange} value={valueInput} placeholder={"N° Mesa"} className={styles.input} />
                {table !== "" ? <Link to={`/table/${table.table_number}`} className={styles.enter} onClick={handleClick} >Ingresar</Link> : ""}
            </div>
        </div>
    )
};

export default Input;


