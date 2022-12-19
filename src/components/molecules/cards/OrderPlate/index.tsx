import { useContext } from 'react';
import { OrderContext } from '../../../../context/order/OrderContext';
import { Plate } from '../../../../interfaces';
import styles from './OrderPlate.module.scss'


export const OrderPlate = () => {

    const {cart, modalPlate, setModalPlate} = useContext(OrderContext)

    const handleEdit = (cartProduct:Plate)  => () =>  {
     setModalPlate(
        {
            ...modalPlate,
            id: cartProduct.id,
            state: true,
            title: cartProduct.title,
            price: cartProduct.price,
            description: cartProduct.description,
            quantity: cartProduct.quantity,
            photo: ""
        }
     )
    }

    const handleDelete = () =>  {
        console.log('delete')
       }

    return (
        <>
            {cart.map((cartProduct) => (
                <div key={cartProduct.id} className={styles.containerCardOrder}>
                    <div className={styles.containerDescription}>
                        <h4>{cartProduct.title}</h4>
                        <small>Cantidad: {cartProduct.quantity}</small>
                        <small onClick={handleEdit(cartProduct)}>Editar</small>
                        <small onClick={handleDelete}>Eliminar</small>
                        <small className={styles.state}>Preparando su solicitud</small>
                    </div>
                   {/*  <img src={cartProduct.photo} alt={cartProduct.photo} className={styles.img} /> */}
                </div>

            ))}
        </>
    )
};
