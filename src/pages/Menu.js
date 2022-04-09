
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import styles from "./Menu.module.css"

import { getAllCategories, getAllProducts } from "../services/menu";

import CardsCategories from '../components/molecules/CardsCategories'
import CardsDishFood from "../components/molecules/CardsDishFood";
import HeaderBrandTable from "../components/molecules/HeaderBrandTable";



const Menu = ({ table, cart, setCart }) => {

    const [categorySelected, setCategorySelected] = useState("Pizzanesas")

    const [categories, setCategories] = useState([]);

    const [foodCategory, setFoodCategory] = useState([])


    useEffect(() => {
        getAllCategories()
            .then((data) => setCategories(data))
            .catch((err) => console.log(err))
    }, []);


    useEffect(() => {
        getAllProducts()
            .then((data) => {
                const categoryDish = categories.find((e) => e.name === categorySelected)
                const dishAccordingCategory = data.filter((e) => e.id_category === categoryDish.id)
                setFoodCategory(dishAccordingCategory)
            })
            .catch((err) => console.log(err))
    }, [categories, categorySelected])



    //CardsCategories
    const handleClickCategory = (cardSelected) => () => {
        setCategorySelected(cardSelected.name)
    }

    //CardsDishfood
    const handleClickSelected = (item) => () => {
        setCart([...cart, item])
    }

    //CardsDishfood
    const handleClickNotSelected = (item) => () => {
        const cartCurrent = cart.filter((e) => e.id !== item.id)
        setCart(cartCurrent)
    }


    return (
        <>
            <HeaderBrandTable table={table} />
            <CardsCategories handleClickCategory={handleClickCategory} category={categorySelected} cardsHeaderMenu={categories} />
            <CardsDishFood cart={cart} foodCategory={foodCategory} setCart={setCart} category={categorySelected} cardsHeaderMenu={categories} handleClickNotSelected={handleClickNotSelected} handleClickSelected={handleClickSelected} />
            <div className={styles.container}>
                {cart.length === 0 ? "" : <Link to={`/table/${table.table_number}/menu/order`} className={styles.order}>Ver mi orden</Link>}
                <Link to={`/table/${table.table_number}`} className={styles.home}>Volver a home</Link>
            </div>
        </>
    )
};

export default Menu;
