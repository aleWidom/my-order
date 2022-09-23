import React from 'react';
import styles from './CardHome.module.css'


const CardHome= ({title, source}) => {
    return <div className={styles.container}>
    <img src={source} className={styles.img} />
    <h5 className={styles.title}>{title}</h5>
    </div>

}

export default CardHome;
