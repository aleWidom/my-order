import React from 'react';
import styles from './CardHome.module.css'


const CardHome= ({description}) => {
    return <div className={styles.container}>
        <h1>{description}</h1>
    </div>;
}

export default CardHome;
