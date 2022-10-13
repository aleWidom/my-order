import { useContext } from 'react'
import { OrderContext } from '../../../../context'
import styles from './MainPlate.module.css'


export const MainPlate = ({header, price, source, description }) => {

    const { modalPlate, setModalPlate } = useContext(OrderContext);

    const onClickCardHome = () => {
        setModalPlate({
            ...modalPlate,
            state: true,
            title: header,
            price: price,
            img: source,
            description: description
          });
    }

    return <div className={styles.container} onClick={onClickCardHome}>
        <img src={source} className={styles.img} alt={source} />
        <h5 className={styles.title}>{header}</h5>
    </div>
}



