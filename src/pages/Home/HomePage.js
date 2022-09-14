
import { useState, useContext } from 'react';
import Loading from '../../components/Loading/Loading';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import CardsCategories from '../../components/CardsCategories/CardsCategories'
import CardsHome from '../../components/CardsHome/CardsHome';
import Footer from '../../components/Footer/Footer';

import { InputProvider } from '../../context/input';

import { useFetchCardsPlatesHome } from '../../hooks';
import styles from "./HomePage.module.css"
import { OrderContext } from '../../context/order';


const HomePage = () => {

  const [loading, setLoading] = useState(false) //TODO PASARLO A TRUE

  const {cardsHome, setCardsHome} = useContext(OrderContext)

  useFetchCardsPlatesHome(setCardsHome)

  return (
    <>
      {loading ?
        <div className={styles.mainContainerLoading}>
          <Loading />
        </div> :
        <div className={styles.mainContainerHome}>
          <Header />
          <InputProvider>
            <Input />
          </InputProvider>
          <CardsCategories />
          <div className={styles.cardsMostPopular}>
            <CardsHome title={'Platos más solicitados.'} sectionHone={cardsHome.specials} />
          </div>
          <div className={styles.suggestions}>
            <CardsHome title={'Sugerencias del cheff.'} sectionHone={cardsHome.ranking} />
          </div>
          <div className={styles.daysPlates} >
            <CardsHome title={'Platos del día.'} sectionHone={cardsHome.dayPlates} />
          </div>
          <div className={styles.footer}>
            <Footer />
          </div>
        </div>}
    </>
  )
};

export default HomePage;
