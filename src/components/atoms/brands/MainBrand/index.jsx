import brand from '../../../../images/brand.jpg'
import styles from './MainBrand.module.css' 


export const MainBrand = () => {
    return (
        <div className={styles.containerMainBrand} >
            <img src={brand} alt={'brand'} className={styles.mainBrand}  />
        </div>
    )
};



