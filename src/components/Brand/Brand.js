import brand from '../../images/brand.jpg'
import styles from './Brand.module.css' 


const Brand = () => {
    return (
        <>
            <img src={brand} alt={'brand'} className={styles.brand} />
        </>
    )
};


export default Brand;
