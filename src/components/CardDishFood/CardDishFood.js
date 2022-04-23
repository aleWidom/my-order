import React from 'react';
import styles from './CardDishFood.module.css'


const CardDishFood = ({ price, description, header, children, source }) => {
    return <div className={styles.container}>
        <h4 className={styles.header}>{header}</h4>
        <div className={styles.cardBody}>
            <div className={styles.descriptionPrice}>
                <p className={styles.description}>{description}</p>
                <p>{price}</p>
                {children}
            </div>
            <div className={styles.imgCardDishFoodContainer} >
                <img src={source} className={styles.imgCardDishFood} alt={""} />
            </div>
        </div>
    </div>;
}

export default CardDishFood;
