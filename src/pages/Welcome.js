import Input from '../components/Input';
import Brand from '../components/Brand';

import styles from './Welcome.module.css'

import { fetchTables } from '../services/tables';
import { useState, useEffect } from 'react';



const Welcome = ({ table, setTable }) => {

  const [tablesId1Restaurant, setTablesRestaurantId1] = useState([])

  useEffect(() => {
    fetchTables()
      .then((data) => setTablesRestaurantId1(data))
      .catch((err) => err)
  }, [])


  return (
    <div className={styles.welcome}>
      <h3 className={styles.header}>Bienvenidos...</h3>
      <Brand clases={styles.brand} />
      <Input table={table} setTable={setTable} tablesId1Restaurant={tablesId1Restaurant} />
    </div>
  )
};

export default Welcome;

