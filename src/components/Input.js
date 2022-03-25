import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Input.module.css";

import { useState, useEffect } from 'react';

import { API } from 'aws-amplify'
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';

console.log(mutations.updateTable_)

const Input = ({ table, setTable }) => {

    console.log(table)

    const [tablesId1, setTablesId1] = useState([])

    const [valueInput, setValueInput] = useState("")

    useEffect(() => {
        fetchTodos()
    }, [])

    async function fetchTodos() {
        try {
            const tablesData = await API.graphql({ query: queries.listTable_s })
            const tables = tablesData.data.listTable_s
            const tablesId1 = tables.filter((e) => e.id_restaurant === 1)
            setTablesId1(tablesId1)
        } catch (err) { console.log('error fetching todos') }
    }



    async function updateTableNumberActive() {
        try {
            console.log(2)
            const updateTableActive = {
                ...table,
                table_active: 1
            };

            const updatedTable = await API.graphql({ query: mutations.updateTable_, variables: { input: updateTableActive } });

            setTable(updatedTable)
        }
        catch (err) { console.log('error fetching todos') }
    }




    const handleChange = (e) => {
        setValueInput(e.target.value)
        setTable("")
        const value = e.target.value
        const tableNumberEntered = tablesId1.find((e) => e.table_number.toUpperCase() === value.toUpperCase() && e.table_active === 0)
        tableNumberEntered !== undefined && setTable(tableNumberEntered)
    }



    const handleClick = () => {
        updateTableNumberActive()
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


