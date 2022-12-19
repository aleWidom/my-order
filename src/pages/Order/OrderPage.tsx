import { useContext } from 'react';
import { OrderContext } from '../../context/order/OrderContext';
import { Navbar } from '../../components/organisms'
import { ModalPlate, OrderPlate } from '../../components/molecules';
import styles from './OrderPage.module.scss'


const OrderPage = () => {

  const {modalPlate } = useContext(OrderContext)

  return (
    <>
      <div className={styles.mainContainerOrder}>
        <Navbar />
        <h2 className={styles.title}>Mis solicitudes</h2>
        <OrderPlate />
      </div>
      {modalPlate.state && <ModalPlate buttonName={'Editar'} />}
    </>

  )
};

export default OrderPage;
