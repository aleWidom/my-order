import { useContext } from 'react';
import { Link } from "react-router-dom";
import { TableContext } from '../../context/tables';
import { InputContext } from '../../context/input'
import { updateTableNumberActive } from '../../services';
import Brand from '../../components/Brand/Brand';
import Input from '../../components/Input/Input'
import styles from './WelcomeElements.module.css'


export const WelcomeElements = () => {

  const { table, setTable } = useContext(TableContext)

  const { setErrInput } = useContext(InputContext)

  const handleEnter = () => {
    if (table === "") {
      setErrInput("Debe colocar una mesa existente disponible")
    } else {
      setErrInput("")
      updateTableNumberActive(table)
        .then((data) => {
          const newTableActive = {
            ...table,
            table_active: 1
          }
          setTable(newTableActive)
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <>
      <Brand />
      <Input placeholder={"Por favor ingrese su Nº de Mesa"} setTable={setTable}/>
      {table === "" ?
          <Link to={`/`} onClick={handleEnter} className={styles.mesaSinEncontrar}>Ingresar</Link> :
          <Link to={`/table/${table.table_number}`} className={styles.mesaEncontrada} onClick={handleEnter}>Ingresar</Link>
        }
    </>
  )
};


