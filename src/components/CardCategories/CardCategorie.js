import React from 'react';
import styles from './CardCategorie.module.css'

const CardCategorie = ({description, handleClick }) => {
  return <div onClick={handleClick} className={styles.container}>
    <p>{description}</p>
  </div>;
};

export default CardCategorie;
