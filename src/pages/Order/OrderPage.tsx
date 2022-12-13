import {Navbar} from '../../components/organisms'
import styles from './OrderPage.module.css'


const OrderPage = () => {
  return (
    <div className={styles.mainContainerOrder}>
    <Navbar />
    <h2 className={styles.title}>Mis solicitudes</h2>
  </div>
  )
};

export default OrderPage;
