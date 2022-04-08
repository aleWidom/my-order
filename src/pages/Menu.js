
import { useState } from "react";
import CardsCategories from '../components/molecules/CardsCategories'
import CardsDishFood from "../components/molecules/CardsDishFood";
import HeaderBrandTable from "../components/molecules/HeaderBrandTable";
import { Link } from 'react-router-dom'
import styles from "./Menu.module.css"

const Menu = ({ table, cart, setCart }) => {

    const [categorySelected, setCategorySelected] = useState("Pizzanesas")

    return (
        <>
            <HeaderBrandTable table={table} />
            <CardsCategories setCategorySelected={setCategorySelected} category={categorySelected} />
            <CardsDishFood cart={cart} setCart={setCart} category={categorySelected} />
            <div className={styles.container}>
                {cart.length === 0 ? "" : <Link to={`/table/${table.table_number}/menu/order`} className={styles.order}>Ver mi orden</Link>}
                <Link to={`/table/${table.table_number}`} className={styles.home}>Volver a home</Link>
            </div>
        </>
    )
};

export default Menu;
