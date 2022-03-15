import Input from '../components/Input';
import Brand from '../components/Brand';
import styles from './Welcome.module.css'

import { useEffect } from 'react';

import { API, graphqlOperation } from 'aws-amplify'
import { listRestaurants } from '../graphql/queries'



const Welcome = ({ tableNumber, setTableNumber }) => {

  useEffect(() => {
    fetchTodos()
  }, [])

  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listRestaurants))
      const todos = todoData.data.listRestaurants
      console.log(todos)
    } catch (err) { console.log('error fetching todos') }
  }

  return (
    <div className={styles.welcome}>
      <h3 className={styles.header}>Bienvenidos...</h3>
      <Brand clases={styles.brand} />
      <Input tableNumber={tableNumber} setTableNumber={setTableNumber} />
    </div>
  )
};

export default Welcome;

