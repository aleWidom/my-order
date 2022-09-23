
import { useState, useContext } from 'react';
import { InputContext } from '../../context/input';
import { OrderContext } from '../../context/order';
import { useFetchCardsRanking,useFetchCardsDayPlates  } from '../../hooks';
import Loading from '../../components/Loading/Loading';
import Input from '../../components/Input/Input';
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

  const { resultsSearched} = useContext(InputContext)

  const { cardsRanking, setCardsRanking, cardsDayPlate, setCardsDayPlate, menuWaiterActive } = useContext(OrderContext)

  useFetchCardsRanking(setCardsRanking, setLoading)

  useFetchCardsDayPlates(setCardsDayPlate)

  return (
    <>
      {loading ?
        <div className={styles.mainContainerLoading}>
          <Loading />
        </div> :
        <div className={styles.mainContainerHome}>
          <Header />
          {menuWaiterActive ? <CallWaiterList/> : ""}
          <Input />
          <CardsCategories />
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
