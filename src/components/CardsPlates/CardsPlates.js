import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { OrderContext } from "../../context/order";
import CardPlate from "../CardPlate/CardPlate"
import styles from './CardsPlates.module.css'


const CardsPlates = () => {

    const { cart, setCart, categorySelected, platesSelectedCategoryRestaurant } = useContext(OrderContext)

    const handleClickSelected = (item) => () => {
        setCart([...cart, item])
    }

    const handleClickNotSelected = (item) => () => {
        const cartCurrent = cart.filter((e) => e.id !== item.id)
        setCart(cartCurrent)
    }

    return (
        <div className={styles.container}>
            <h3 className={styles.header}>{categorySelected}</h3>
            {platesSelectedCategoryRestaurant.map((e) => (
                cart.filter((item) => item.id === e.id).length > 0 ?
                    <CardPlate key={e.id} price={`$${e.price}`} header={e.title} description={e.description} source={e.photo}>
                        <button className={styles.agreggate}>Agregado</button>
                        <FaTrashAlt onClick={handleClickNotSelected(e)} className={styles.buttonRemove} />
                    </CardPlate>
                    :
                    <CardPlate key={e.id} price={`$${e.price}`} header={e.title} description={e.description} source={e.photo}>
                        <button className={styles.notAgreggate} onClick={handleClickSelected(e)}>Agregar al pedido</button>
                    </CardPlate>
            ))}
        </div>
    )
};

export default CardsPlates;
