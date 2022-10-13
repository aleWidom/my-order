import { useState, useContext } from 'react';
import { OrderContext, SearchContext } from '../../context';
import { useFetchCardsDayPlates, useFetchCardsRankingPlates } from '../../hooks';
import { CallWaiter, Categories, FormSearch, MainLoading, ModalPlate } from '../../components/molecules'
import { MainPlates, Plates, Navbar } from '../../components/organisms'
import styles from "./HomePage.module.css"

const HomePage = () => {

  const [loading, setLoading] = useState(true)

  const { results } = useContext(SearchContext)

  const { cardsDayPlates, cardsRankingPlates, setCardsDayPlates, setCardsRankingPlates, modalPlate } = useContext(OrderContext)

  useFetchCardsDayPlates(setCardsDayPlates, setLoading)

  useFetchCardsRankingPlates(setCardsRankingPlates, setLoading)

  console.log(loading)


  if (loading) {
    return (
      <div className={styles.mainContainerLoading}>
        <MainLoading />
      </div>
    )
  } else {
    if (modalPlate.state) {
      return (
          <ModalPlate/>
      )
    }
    else {
      return (
        <div className={styles.mainContainerHome}>
          <Navbar />
          <CallWaiter/>
          <FormSearch />
          <Categories />
          {results.length === 0 ?
            <MainPlates cardsDayPlates={cardsDayPlates} cardsRankingPlates={cardsRankingPlates} /> :
            <Plates setLoading={setLoading} />
          }
        </div>
      )
    }
  }
};

export default HomePage;
