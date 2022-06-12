import { useEffect, useContext } from 'react';
import DataContext from '../../components/DataContext';

import Input from '../../components/Input/Input';
import Brand from '../../components/Brand/Brand';

import { fetchTables } from '../../services/tables';

import styles from './Welcome.module.css'

import { Link } from "react-router-dom";


const Welcome = () => {

  const { setTablesRestaurantId1, table, handleClickInput } = useContext(DataContext)

  useEffect(() => {
    fetchTables()
      .then((data) => setTablesRestaurantId1(data))
      .catch((err) => err)
  }, [])

  //another shape iife functions (search)

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


