import { FaTrashAlt } from "react-icons/fa";
import CardDishFood from "../CardDishFood/CardDishFood"
import styles from "./CardsDishFood.module.css"


const CardsDishFood = ({ category, cart, handleClickNotSelected, handleClickSelected, foodCategory }) => {

    return (
        <div className={styles.container}>
            <h3 className={styles.header}>{category}</h3>
            {foodCategory.map((e) => (
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
