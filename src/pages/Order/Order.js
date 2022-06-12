import { useContext } from 'react';
import DataContext from '../../components/DataContext';

import CardsOrder from "../../components/CardsOrder/CardsOrder"
import HeaderBrandTable from "../../components/HeaderBrandTable/HeaderBrandTable"

import styles from "./Order.module.css"

import { Link } from "react-router-dom"

const Order = () => {

    const { table, total } = useContext(DataContext)
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
