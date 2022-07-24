import { useContext, useState } from 'react';
import { TableContext } from '../../context/tables';

import { updateTableNumberActive } from '../../services';

import { Link } from "react-router-dom";

import Input from '../../components/Input/Input'
import Brand from '../../components/Brand/Brand';

import styles from './Welcome.module.css'


const Welcome = () => {

  const [errInput, setErrInput] = useState(false)

  const { table, setTable } = useContext(TableContext)

  console.log(table)
  console.log(errInput)


  const handleClickInput = () => {
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
      <Input label={"Por favor ingresa tu mesa."} placeholder={"Nº Mesa"} msgError={"Debe colocar una mesa existente disponible."} >
        {table === "" ?
          <Link to={`/`} className={styles.link} onClick={handleClickInput} >Ingresar</Link> :
          <Link to={`/table/${table.table_number}`} className={styles.link} onClick={handleClickInput} >Ingresar</Link>
        }
      </Input>
    </div>
  )
};

export default Welcome;


