import { useState, useContext } from 'react';
import { OrderContext, SearchContext } from '../../context';
import { useFetchCardsDayPlates, useFetchCardsRankingPlates } from '../../hooks';
import { Categories, FormSearch, MainLoading } from '../../components/molecules'
import { MainPlates, Plates, Navbar } from '../../components/organisms'
import styles from "./HomePage.module.css"

const HomePage = () => {

  const [loading, setLoading] = useState(true)

  const { results } = useContext(SearchContext)

  const { cardsDayPlates, cardsRankingPlates, setCardsDayPlates, setCardsRankingPlates } = useContext(OrderContext)

  useFetchCardsDayPlates(setCardsDayPlates, setLoading)

  useFetchCardsRankingPlates(setCardsRankingPlates, setLoading)

  return (
    <>
      {loading ?
        <div className={styles.mainContainerLoading}>
          <MainLoading />
        </div> :
        <div className={styles.mainContainerHome}>
          <Navbar />
          <FormSearch />
          <Categories />
          {results.length === 0 ?
            <MainPlates cardsDayPlates={cardsDayPlates} cardsRankingPlates={cardsRankingPlates} /> :
            <Plates setLoading={setLoading} />
          }
        </div>}
    </>
  )
};

export default HomePage;
