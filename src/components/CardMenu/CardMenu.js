import React, { useContext } from 'react';
import { OrderContext } from '../../context/order';
import styles from './CardMenu.module.css'


const CardMenu = ({ price, description, header, source }) => {

    const {modalRequestFood,  setModalRequestFood } = useContext(OrderContext)

    const handleClickRequest = (header) => {
        setModalRequestFood({
            ...modalRequestFood, 
            state: true, 
            title: header
        })
        /*  const confirma = window.confirm(`Confirma el pedido de  ${header}?`)
         if(confirma) {
             alert(`Su ${header} llegará a su mesa en unos instantes :)`)
         } */
    }


    return <div className={styles.containerCardMenu}>
        <div className={styles.containerDescription}>
            <h4 className={styles.header}>{header}</h4>
            <p className={styles.description}>{description.length > 40 ? description.slice(0, 42) + "..." : description}</p>
            <p className={styles.price}>${price}</p>
            <button onClick={handleClickRequest} className={styles.button}>Solicitar</button>
        </div>
        <div className={styles.containerImg} >
            <img src={source} className={styles.imgCardDishFood} alt={""} />
        </div>
    </div>
}

export default CardMenu;
