import { useContext } from 'react';
import { OrderContext } from '../../../../context/order/OrderContext';
import styles from './OrderPlate.module.scss'


export const OrderPlate = () => {

    const {cart} = useContext(OrderContext)

    return (
        <>
            {cart.map((cartProduct) => (
                <div key={cartProduct.id} className={styles.containerCardOrder}>
                    <div className={styles.containerDescription}>
                        <h4>{cartProduct.title}</h4>
                        <small>Cantidad: {cartProduct.quantity}</small>
                        <small>Editar</small>
                        <small>Eliminar</small>
                        <small className={styles.state}>Preparando su solicitud</small>
                    </div>
                    <img src={cartProduct.photo} alt={cartProduct.photo} className={styles.img} />
                </div>
            ))}
        </>
    )
};
