import { useState } from "react"
import CardsOrder from "../../components/CardsOrder/CardsOrder"
import HeaderBrandTable from "../../components/HeaderBrandTable/HeaderBrandTable"
import { Link } from "react-router-dom"
import styles from "./Order.module.css"

const Order = ({ cart, table }) => {

    const priceQuantityCart = cart.map((e) => {
        return { quantity: 1, price: e.price }
    })

    const [quantity, setQuantity] = useState(priceQuantityCart)

    const total = quantity.map((e) => { return e.quantity * e.price }).reduce((acumulador, actual) => acumulador + actual)


    const handleQuantityAdd = (i) => () => {
        const quantityAdd = [...quantity]
        quantityAdd[i].quantity = quantityAdd[i].quantity + 1
        setQuantity(
            quantityAdd
        )
    }

    const handleQuantitySubtract = (i) => () => {
        const quantitySubtract = [...quantity]
        quantitySubtract[i].quantity = quantitySubtract[i].quantity - 1
        setQuantity(
            quantitySubtract
        )
    }

    return (
        <>
            <HeaderBrandTable table={table} />
            <CardsOrder quantity={quantity} setQuantity={setQuantity} cart={cart} handleQuantitySubtract={handleQuantitySubtract} handleQuantityAdd={handleQuantityAdd} />
            <div className={styles.container}>
                <div className={styles.containerTotal}>
                    <h3 className={styles.confirm}>Confirmar Orden</h3>
                    <p className={styles.total}>{`Total: $${total}`}</p>
                </div>
                <Link to={`/table/${table.table_number}/menu`} className={styles.back}>Volver a seleccionar el menú</Link>
            </div>
        </>
    )
}

export default Order;
