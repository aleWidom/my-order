import Input from '../components/Input';
import Brand from '../components/Brand';
import styles from './Welcome.module.css'



const Welcome = ({ tableNumber, setTableNumber }) => {
  return (
    <div className={styles.welcome}>
      <h3 className={styles.header}>Bienvenidos...</h3>
      <Brand clases={styles.brand} />
      <Input tableNumber={tableNumber} setTableNumber={setTableNumber} />
    </div>
  )
};

export default Welcome;
