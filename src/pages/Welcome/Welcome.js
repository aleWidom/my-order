import Input from '../../components/Input/Input';
import Brand from '../../components/Brand/Brand';

import styles from './Welcome.module.css'

import { fetchTables } from '../../services/tables';
import { useState, useEffect } from 'react';
import { updateTableNumberActive } from '../../services/tables';
import { Link } from "react-router-dom";


const Welcome = ({ table, setTable }) => {

  const [tablesId1Restaurant, setTablesRestaurantId1] = useState([])

  const [valueInput, setValueInput] = useState("")

  const [errInput, setErrInput] = useState(false)

  useEffect(() => {
    fetchTables()
      .then((data) => setTablesRestaurantId1(data))
      .catch((err) => err)
  }, [])

  //another shape iife functions (search)

  const handleChange = (e) => {
    setValueInput(e.target.value)
    setTable("")
    if (e.target.value.length > 2) {
      const value = e.target.value
      const tableNumberEntered = tablesId1Restaurant.find((e) => e.table_number.toUpperCase() === value.toUpperCase() && e.table_active === 0)
      if (tableNumberEntered !== undefined) {
        setTable(tableNumberEntered)
        setErrInput(false)
      }
    }
  }

  const handleClick = () => {
    if (table === "") {
      setErrInput(true)
    } else {
      setErrInput(false)
      updateTableNumberActive(table)
        .then((data) => {
          const newTableActive = {
            ...table,
            table_active: 1
          }
          setTable(newTableActive)
        })
        .catch((err) => err)
    }
  }


  return (
    <div className={styles.welcome}>
      <h3 className={styles.header}>Bienvenidos...</h3>
      <Brand clases={styles.brand} />
      <Input handleChange={handleChange} handleClick={handleClick} valueInput={valueInput} label={"Por favor ingresa tu mesa."} error={errInput} placeholder={"Nº Mesa"} msgError={"Debe colocar una mesa existente disponible."} >
        {table === "" ?
          <Link to={`/`} className={styles.link} onClick={handleClick} >Ingresar</Link> :
          <Link to={`/table/${table.table_number}`} className={styles.link} onClick={handleClick} >Ingresar</Link>
        }
      </Input>
    </div>
  )
};

export default Welcome;


