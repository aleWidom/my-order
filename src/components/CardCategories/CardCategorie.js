import React from 'react';
import styles from './CardCategorie.module.css'

const CardCategorie = ({ source, description, alternativo, handleClick, clases }) => {
  return <div onClick={handleClick}>
    <img alt={alternativo} src={source} className={styles.imgCardCategorie} />
    <p className={clases}>{description}</p>
  </div>;
};

export default CardCategorie;
