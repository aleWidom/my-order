import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { OrderContext } from "../../context/order";
import CardDishFood from "../CardDishFood/CardDishFood"
import styles from "./CardsDishFood.module.css"


const CardsDishFood = () => {

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
                    <CardDishFood key={e.id} price={`$${e.price}`} header={e.title} description={e.description} source={e.photo}>
                        <button className={styles.agreggate}>Agregado</button>
                        <FaTrashAlt onClick={handleClickNotSelected(e)} className={styles.buttonRemove} />
                    </CardDishFood>
                    :
                    <CardDishFood key={e.id} price={`$${e.price}`} header={e.title} description={e.description} source={e.photo}>
                        <button className={styles.notAgreggate} onClick={handleClickSelected(e)}>Agregar al pedido</button>
                    </CardDishFood>
            ))}
        </div>
    )
};

export default CardsDishFood;
