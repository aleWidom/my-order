import CardDishFood from "../CardDishFood/CardDishFood"
import styles from "./CardsOrder.module.css"

const CardsOrder = ({ quantity, cart, handleQuantityAdd, handleQuantitySubtract }) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.header}>Mi orden</h3>
            {cart.map((e, i) => (
                <CardDishFood key={e.id} header={e.title} description={e.description} price={`Total: $${e.price * quantity[i].quantity}`} source={e.photo}>
                    <div className={styles.containerQuantity}>
                        <p className={styles.quantity}>{`Cantidad: ${quantity[i].quantity}`}</p>
                        {quantity[i].quantity === 1 ?
                            <button onClick={handleQuantityAdd(i)} className={styles.buttonQuantity}>+</button>
                            :
                            <>
                                <button onClick={handleQuantityAdd(i)} className={styles.buttonQuantity}>+</button>
                                <button onClick={handleQuantitySubtract(i)} className={styles.buttonQuantity}>-</button>
                            </>
                        }
                    </div>
                </CardDishFood>
            ))}
        </div>
    )
};

export default CardsOrder;
