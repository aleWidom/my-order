import React from 'react';
import styles from './CardMenu.module.css'


const CardMenu = ({ price, description, header, children, source }) => {
    return <div className={styles.containerCardMenu}>
        <div className={styles.containerDescription}>
            <h4 className={styles.header}>{header}</h4>
            <p className={styles.description}>{description}</p>
            <p>${price}</p>
            {/*      {children} */}
        </div>
        <div className={styles.containerImg} >
            <img src={source} className={styles.imgCardDishFood} alt={""} />
        </div>
    </div>
}

export default CardMenu;
