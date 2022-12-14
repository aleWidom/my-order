import { useContext } from 'react';
import { OrderContext } from '../../context/order/OrderContext';
import { Navbar } from '../../components/organisms'
import { OrderPlate } from '../../components/molecules';
import styles from './OrderPage.module.css'


const OrderPage = () => {

  const { cart } = useContext(OrderContext)

  console.log(cart)

  return (
    <div className={styles.mainContainerOrder}>
      <Navbar />
      <h2 className={styles.title}>Mis solicitudes</h2>
     <OrderPlate/>
    </div>
  )
};

export default OrderPage;
