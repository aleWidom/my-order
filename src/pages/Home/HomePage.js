
import { useState, useContext } from 'react';
import Loading from '../../components/Loading/Loading';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import CardsCategories from '../../components/CardsCategories/CardsCategories'
import CardsHome from '../../components/CardsHome/CardsHome';

import { useFetchCategories, useFetchPlates } from "../../hooks";
import { InputProvider } from '../../context/input';
import { OrderContext } from '../../context/order';
import styles from "./HomePage.module.css"
import Footer from '../../components/Footer/Footer';


const HomePage = () => {

  const [loading, setLoading] = useState(true)

  const { /* cart ,*/ nameCategorySelected, setCategoriesMenuRestaurant, setPlatesSelectedCategoryRestaurant } = useContext(OrderContext)


  setTimeout(() => {
    setLoading(false)
  }, 4000);

  useFetchCategories(setCategoriesMenuRestaurant)

  useFetchPlates(nameCategorySelected, setPlatesSelectedCategoryRestaurant)

  return (
    <>
      {loading ?
        <div className={styles.mainContainerLoading}>
          <Loading />
        </div> :
        <div  className={styles.mainContainerHome}>
          <Header />
          <InputProvider>
            <Input />
          </InputProvider>
          <CardsCategories />
          <div className={styles.cardsMostPopular}>
            <CardsHome title={'Platos más solicitados.'} />
          </div>
          <div className={styles.suggestions}>
            <CardsHome title={'Sugerencias del cheff.'} />
          </div>
          <div className={styles.daysPlates}>
            <CardsHome title={'Platos del día.'} />
          </div>
          <div className={styles.footer}>
          <Footer/>
          </div>
        </div>}
    </>
  )
};

export default HomePage;
