import React from 'react';
import styles from './CardMenu.module.css'


const CardMenu = ({ price, description, header, source }) => {

    const handleClickRequest = () => {
        const confirma = window.confirm(`Confirma el pedido de  ${header}?`)
        if(confirma) {
            alert(`Su ${header} llegará a su mesa en unos instantes :)`)
        }
    }

    return <div className={styles.containerCardMenu}>
        <div className={styles.containerDescription}>
            <h4 className={styles.header}>{header}</h4>
            <p className={styles.description}>{description}</p>
            <p>${price}</p>
            <button onClick={handleClickRequest}>Solicitar</button>
        </div>
        <div className={styles.containerImg} >
            <img src={source} className={styles.imgCardDishFood} alt={""} />
        </div>
    </div>
}

export default CardMenu;
