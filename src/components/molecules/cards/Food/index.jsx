import React, { useContext } from 'react';
import { OrderContext } from '../../../../context';
import styles from './Food.module.css'


export const Food = ({ price, description, header, source }) => {

    console.log(header)

    const { modalRequestFood, setModalRequestFood } = useContext(OrderContext)

    const handleClickRequest = () => {
        setModalRequestFood({
            ...modalRequestFood,
            state: true,
            title: header
        })
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
