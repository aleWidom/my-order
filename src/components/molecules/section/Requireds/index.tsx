import { Link } from "react-router-dom"
import styles from './Requireds.module.scss'
import { useContext } from 'react';
import { OrderContext } from '../../../../context/order/OrderContext';

const Requireds = () => {

  const { cart, modalPlate, modalPlateRequired } = useContext(OrderContext)

  return (  
        <div className={styles.required}>
        {cart.length > 0 && modalPlate.state === false && modalPlateRequired.state === false && (
          <>
          <Link to={"/order"} className={styles.link}>{`Ver mis solicitudes >`}</Link>
          <div className={styles.quantity}>
            <small>{cart.length}</small>
          </div>
          </>
          )}
        </div>
  )
}

export default Requireds

