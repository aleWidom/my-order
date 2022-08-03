import { useContext } from 'react';
import { TableContext } from '../../context/tables';

import { Link } from "react-router-dom";

import Input from '../../components/Input/Input'
import Brand from '../../components/Brand/Brand';

export const WelcomeElements = () => {

  const { table, setTable } = useContext(TableContext)

  return (
    <>
      <Brand />
      <Input label={"Por favor ingresa tu mesa."} placeholder={"Nº Mesa"} msgError={"Debe colocar una mesa existente disponible."} setTable={setTable}>
        {table === "" ?
          <Link to={`/`}>Ingresar</Link> :
          <Link to={`/table/${table.table_number}`}>Ingresar</Link>
        }
      </Input>
    </>
  )
};


