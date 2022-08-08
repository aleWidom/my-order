import { useContext } from 'react';
import { Link } from "react-router-dom";
import { TableContext } from '../../context/tables';
import { InputContext } from '../../context/input'
import { updateTableNumberActive } from '../../services';
import Brand from '../../components/Brand/Brand';
import Input from '../../components/Input/Input'


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
        .catch((err) => err)
    }
  }


  return (
    <>
      <Brand />
      <Input label={"Por favor ingresa tu mesa."} placeholder={"Nº Mesa"} setTable={setTable}>
        {table === "" ?
          <Link to={`/`} onClick={handleEnter}>Ingresar</Link> :
          <Link to={`/table/${table.table_number}`} onClick={handleEnter}>Ingresar</Link>
        }
      </Input>
    </>
  )
};


