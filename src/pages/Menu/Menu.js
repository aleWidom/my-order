
import { useEffect } from "react";
import { Link } from 'react-router-dom'

import { getAllCategoriesIdRestaurant1, getItemsAccordingToSelectedCategory } from "../../services/items";

import CardsCategories from '../../components/CardsCategories/CardsCategories'
import CardsDishFood from "../../components/CardsDishFood/CardsDishFood";
import HeaderBrandTable from "../../components/HeaderBrandTable/HeaderBrandTable";

import styles from "./Menu.module.css"

const Menu = () => {

  useEffect(() => {
    getAllCategoriesIdRestaurant1()
      .then((data) => {
        setCategories(data)
      })
      .catch((err) => console.log(err))
  }, []);

  useEffect(() => {
    getItemsAccordingToSelectedCategory(categorySelected)
      .then((data) => {
        setFoodCategory(data)
      })
      .catch((err) => console.log(err))
  }, [categorySelected]);


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
