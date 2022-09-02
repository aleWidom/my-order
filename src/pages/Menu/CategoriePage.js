
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import { OrderContext } from '../../context/order';
import { TableContext } from '../../context/tables';
import { useFetchPlates } from '../../hooks';
import { useFetchCategories } from "../../hooks/useFetchCategories";

import CardsCategories from '../../components/CardsCategories/CardsCategories'
import CardsPlates from "../../components/CardsPlates/CardsPlates";
import HeaderBrandTable from "../../components/HeaderBrandTable/HeaderBrandTable";
import Loading from '../../components/Loading/Loading';

import styles from "./MenuPage.module.css"

const MenuPage = () => {

  const [loading, setLoading] = useState(true)

  const { cart, nameCategorySelected, setCategoriesMenuRestaurant, setPlatesSelectedCategoryRestaurant } = useContext(OrderContext)

  const { table} = useContext(TableContext)

  useFetchCategories(setCategoriesMenuRestaurant)

  useFetchPlates(nameCategorySelected, setPlatesSelectedCategoryRestaurant)

  setTimeout(() => {
    setLoading(false)
  }, 4000);

  return (
    <div className={styles.container}>
      {loading ? <Loading /> :
        <>
          <HeaderBrandTable />
          <CardsCategories />
          <CardsPlates />
        {/*   <div className={styles.container}>
            {cart.length === 0 ? "" : <Link to={`/table/${table.table_number}/menu/order`} className={styles.order}>Ver mi orden</Link>}
            <Link to={`/table/${table.table_number}`} className={styles.home}>Volver a home</Link>
          </div> */}
        </>}
    </div>
  )
};

export default MenuPage;
