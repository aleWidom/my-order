import { useContext } from 'react';
import { Link } from "react-router-dom"

import CardsOrder from "../../components/CardsOrder/CardsOrder" 
import { TableContext } from '../../context/tables';
import { OrderContext } from '../../context/order';
import HeaderBrandTable from "../../components/HeaderBrandTable/HeaderBrandTable"

import styles from "./OrderPage.module.css"


const Order = () => {

    const { table } = useContext(TableContext) 

    const {cart} = useContext(OrderContext)

    const total = cart.map((e) => { return e.quantity * e.price }).reduce((acumulador, actual) => acumulador + actual)

    return (
        <>
            <HeaderBrandTable />
            <CardsOrder /> 
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
