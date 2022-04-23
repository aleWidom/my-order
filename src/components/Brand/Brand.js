/* import styles from './Brand.module.css' */
import brand from '../../images/brand.jpg'


const Brand = ({ clases }) => {
    return (
        <>
            <img src={brand} alt={'brand'} className={clases} />
        </>
    )
};


export default Brand;
