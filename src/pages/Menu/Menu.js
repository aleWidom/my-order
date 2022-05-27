
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import styles from "./Menu.module.css"

import { getAllCategoriesIdRestaurant1 } from "../../services/items";

import CardsCategories from '../../components/CardsCategories/CardsCategories'
import CardsDishFood from "../../components/CardsDishFood/CardsDishFood";
import HeaderBrandTable from "../../components/HeaderBrandTable/HeaderBrandTable";



const Menu = ({ table, cart, setCart }) => {

  const [categorySelected, setCategorySelected] = useState("Pizzanesas")

  const [categories, setCategories] = useState([]);

  const [foodCategory, setFoodCategory] = useState([])

  useEffect(() => {
    getAllCategoriesIdRestaurant1()
      .then((data) => {
        setCategories(data)
      })
      .catch((err) => console.log(err))
  }, []);


  //CardsCategories
  const handleClickCategory = (cardSelected) => () => {
    /*    setCategorySelected(cardSelected.name) */
    setCategorySelected(cardSelected.nameCategories)
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
      <CardsCategories handleClickCategory={handleClickCategory} category={categorySelected} categories={categories} />
      <CardsDishFood cart={cart} foodCategory={foodCategory} setCart={setCart} category={categorySelected} handleClickNotSelected={handleClickNotSelected} handleClickSelected={handleClickSelected} />
      <div className={styles.container}>
        {cart.length === 0 ? "" : <Link to={`/table/${table.table_number}/menu/order`} className={styles.order}>Ver mi orden</Link>}
        <Link to={`/table/${table.table_number}`} className={styles.home}>Volver a home</Link>
      </div>
    </>
  )
};

export default Menu;
