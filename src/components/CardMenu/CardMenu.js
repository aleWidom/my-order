import React from 'react';
import styles from './CardMenu.module.css'


const CardMenu= ({ price, description, header, children, source }) => {
    return <div className={styles.containerCardMenu}>
        <h4 className={styles.header}>{header}</h4>
        <div className={styles.card}>
            <div className={styles.description}>
                {/*        <p className={styles.description}>{description}</p> */}
                <p>{price}</p>
                {children}
            </div>
           <div className={styles.img} >
                <img src={source} className={styles.imgCardDishFood} alt={""} />
            </div> 
        </div>
    </div>;
}

export default CardMenu;
