
import { useState, useContext } from 'react';
import Loading from '../../components/Loading/Loading';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import CardsCategories from '../../components/CardsCategories/CardsCategories'
import CardsPlates from '../../components/CardsPlates/CardsPlates'

import { useFetchCategories, useFetchPlates } from "../../hooks";
import { InputProvider } from '../../context/input';
import { OrderContext } from '../../context/order';
import styles from "./HomePage.module.css"

const HomePage = () => {

  const [loading, setLoading] = useState(true)

  const { /* cart ,*/ nameCategorySelected, setCategoriesMenuRestaurant, setPlatesSelectedCategoryRestaurant } = useContext(OrderContext)


  setTimeout(() => {
    setLoading(false)
  }, 4000);

  useFetchCategories(setCategoriesMenuRestaurant)

  useFetchPlates(nameCategorySelected, setPlatesSelectedCategoryRestaurant)

  return (
    <div className={styles.container}>
      {loading ?
        <Loading /> :
        <>
          <Header />
          <InputProvider>
            <Input />
          </InputProvider>
          <CardsCategories />
          <div className={styles.cardsPlates}>
            <CardsPlates />
          </div>
        </>}
    </div>
  )
};

export default HomePage;
