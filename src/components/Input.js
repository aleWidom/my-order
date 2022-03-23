import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Input.module.css";

import { useState, useEffect } from 'react';

import { API, graphqlOperation } from 'aws-amplify'
import { listTable_s } from '../graphql/queries'


const Input = ({ tableNumber, setTableNumber }) => {

    const [tablesId1, setTablesId1] = useState("")

    const [valueInput, setValueInput] = useState("")

    useEffect(() => {
        fetchTodos()
    }, [])

    async function fetchTodos() {
        try {
            const tablesData = await API.graphql(graphqlOperation(listTable_s))
            const tables = tablesData.data.listTable_s
            const tablesId1 = tables.filter((e) => e.id_restaurant === 1)
            setTablesId1(tablesId1)
        } catch (err) { console.log('error fetching todos') }
    }


    const handleClick = (e) => {
        setValueInput(e.target.value)
    }

    const handleSubmit = () => {
        const tableValidation = tablesId1.find((e) => e.table_number === valueInput && e.table_active === 0)
        console.log(tableValidation)
        if (tableValidation !== undefined) {
            setTableNumber(tableValidation.table_number)
        }
        else {
            console.log("error")
        }
    }


    return (
        <div className={styles.container}>
            <p>Por favor ingresá tu número de mesa.</p>
            {/*   <div className={tableNumber === "" ? styles.inputLink : (parseInt(tableNumber) > 50 || isNaN(parseInt(tableNumber)) || parseInt(tableNumber[0]) === 0) ? styles.inputLinkError : styles.inputLink}>
                <input onChange={handleClick} value={tableNumber} placeholder={"N° Mesa"} className={styles.input} />
                {
                    tableNumber === "" ? <Link to={`/`} className={styles.enter}>Entrar</Link> :
                        (parseInt(tableNumber) > 50 || isNaN(parseInt(tableNumber)) || parseInt(tableNumber[0]) === 0) ?
                            <p className={styles.error}>Debe escribir un número de mesa existente.</p> :
                            <Link to={`table/${tableNumber}`} className={styles.enter}>Entrar</Link>
                }
            </div> */}
            <input onChange={handleClick} value={valueInput} placeholder={"N° Mesa"} className={styles.input} />
            {tableNumber !== "" ? <Link to={`/table/${tableNumber}`} onClick={handleSubmit} className={styles.enter} >Entrar</Link> :
                <Link to={`/`} onClick={handleSubmit} className={styles.enter} >Entrar</Link>}
        </div>
    )
};

export default Input;


