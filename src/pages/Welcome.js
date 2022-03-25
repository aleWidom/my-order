import Input from '../components/Input';
import Brand from '../components/Brand';
import styles from './Welcome.module.css'

const Welcome = ({table, setTable }) => {
  
  return (
    <div className={styles.welcome}>
      <h3 className={styles.header}>Bienvenidos...</h3>
      <Brand clases={styles.brand} />
      <Input table={table} setTable={setTable} />
    </div>
  )
};

export default Welcome;

