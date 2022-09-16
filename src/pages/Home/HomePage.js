
import { useState, useContext } from 'react';
import { InputContext } from '../../context/input';
import { OrderContext } from '../../context/order';
import { useFetchCardsPlatesHome } from '../../hooks';
import Loading from '../../components/Loading/Loading';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import CardsCategories from '../../components/CardsCategories/CardsCategories'
import CardsHome from '../../components/CardsHome/CardsHome';
import Footer from '../../components/Footer/Footer';
import Results from '../../components/Results/Results';
import styles from "./HomePage.module.css"


const HomePage = () => {

  const [loading, setLoading] = useState(false) //TODO PASARLO A TRUE

  const { wordSearched } = useContext(InputContext)

  const { cardsHome, setCardsHome } = useContext(OrderContext)

  useFetchCardsPlatesHome(setCardsHome)


  return (
    <>
      {loading ?
        <div className={styles.mainContainerLoading}>
          <Loading />
        </div> :
        <div className={styles.mainContainerHome}>
          <Header />
          <Input />
          <CardsCategories />
          {wordSearched === '' ?
            <div className={styles.cardsHomeContainer}>
              <CardsHome cardsHome={cardsHome} />
            </div>
            :
            <div className={styles.resultsContainer}>
              <Results />
            </div>}
          <div className={styles.footerContainer}>
            <Footer />
          </div>
        </div>}
    </>
  )
};

export default HomePage;
