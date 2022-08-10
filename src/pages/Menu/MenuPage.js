
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { OrderContext } from '../../context/order';
import { TableContext } from '../../context/tables';
import { useFetchCategories } from "../../hooks/useFetchCategories";
import { getItemsAccordingToSelectedCategory } from "../../services/items";

import CardsCategories from '../../components/CardsCategories/CardsCategories'
import CardsDishFood from "../../components/CardsDishFood/CardsDishFood";
import HeaderBrandTable from "../../components/HeaderBrandTable/HeaderBrandTable";

import styles from "./MenuPage.module.css"

const MenuPage = () => {

  useFetchCategories()

  const {cart} = useContext(OrderContext)

  const {table} = useContext(TableContext)

  return (
    <>
      <HeaderBrandTable />
      <CardsCategories />
      <CardsDishFood />
      <div className={styles.container}>
        {cart.length === 0 ? "" : <Link to={`/table/${table.table_number}/menu/order`} className={styles.order}>Ver mi orden</Link>}
        <Link to={`/table/${table.table_number}`} className={styles.home}>Volver a home</Link>
      </div>
    </>
  )
};

export default MenuPage;
