import { useContext } from "react";
import { OrderContext } from "../../context/order";
import CardPlate from "../CardPlate/CardPlate"

import styles from "./CardsOrder.module.css"

const CardsOrder = () => {

    const { cart, setCart } = useContext(OrderContext)

    const handleQuantityAdd = (item) => () => {
        const addQuantity = cart.map((e)=> {
            if(e.id === item.id) {
                e.quantity = e.quantity + 1
            }
            return e
        })
        setCart(addQuantity)
    }

    const handleQuantitySubtract = (item) => () => {
        const subtractQuantity = cart.map((e)=> {
            if(e.id === item.id) {
                e.quantity = e.quantity - 1
            }
            return e
        })
        setCart(subtractQuantity)
    }

    return (
        <div className={styles.container}>
            <h3 className={styles.header}>Mi orden</h3>
            {cart.map((e) => (
                <CardPlate key={e.id} header={e.title} description={e.description} price={`Total: $${e.price * e.quantity}`} source={e.photo}>
                    <div className={styles.containerQuantity}>
                        <p className={styles.quantity}>{`Cantidad: ${e.quantity}`}</p>
                        {e.quantity === 1 ?
                            <button onClick={handleQuantityAdd(e)} className={styles.buttonQuantity}>+</button>
                            :
                            <>
                                <button onClick={handleQuantityAdd(e)} className={styles.buttonQuantity}>+</button>
                                <button onClick={handleQuantitySubtract(e)} className={styles.buttonQuantity}>-</button>
                            </>
                        }
                    </div>
                </CardPlate>
            ))}
        </div>
    )
};

export default CardsOrder;
