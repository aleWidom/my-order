
import { useState, useContext } from 'react';
import { SearchContext } from '../../context/search';
import { OrderContext } from '../../context/order';
import { useFetchCardsRanking,useFetchCardsDayPlates  } from '../../hooks';
import Loading from '../../components/Loading/Loading';
import Modal from '../../components/Modal/Modal';
import Search from '../../components/Search/Search';
import Header from '../../components/Header/Header';
import CardsCategories from '../../components/CardsCategories/CardsCategories'
import CardsRanking from '../../components/CardsRanking/CardsRanking';
import Footer from '../../components/Footer/Footer';
import Results from '../../components/Results/Results';
import styles from "./HomePage.module.css"
import CallWaiterList from '../../components/CallWaiterList/CallWaiterList';
import CardsDayPlates from '../../components/CardsDayPlates/CardsDayPlates';


const HomePage = () => {

  const [loading, setLoading] = useState(true) 

  const { resultsSearched} = useContext(SearchContext)

  const { cardsRanking, setCardsRanking, cardsDayPlate, setCardsDayPlate, menuWaiterActive, modalRequestFood } = useContext(OrderContext)

  useFetchCardsRanking(setCardsRanking)

  useFetchCardsDayPlates(setCardsDayPlate, setLoading)

  return (
    <>
      {loading ?
        <div className={styles.mainContainerLoading}>
          <Loading />
        </div> :
        <div className={styles.mainContainerHome}>
          <Header />
          {menuWaiterActive ? <CallWaiterList/> : ""}
          <Search />
          <CardsCategories />
          {modalRequestFood.state ? <Modal/> : ""}
          {resultsSearched.length === 0 ?
            <div className={styles.cardsHomeContainer}>
              <CardsRanking cardsRanking={cardsRanking} title={'Platos más solicitados'} />
              <CardsDayPlates cardsDayPlates={cardsDayPlate}/>
              <CardsRanking cardsRanking={cardsRanking}  title={'Sugerencias'} />
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
