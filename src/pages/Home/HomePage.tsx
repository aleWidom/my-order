import { useContext } from "react";
import { OrderContext, SearchContext } from "../../context";
import {
  useFetchCardsDayPlates,
  useFetchCardsRankingPlates,
} from "../../hooks";
import {
  CallWaiter,
  Categories,
  FormSearch,
  MainLoading,
  ModalPlate,
  ModalPlateRequired,
  ModalInfo
} from "../../components/molecules";
import { MainPlates, Plates, Navbar } from "../../components/organisms";
import Requireds from "../../components/molecules/section/Requireds";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const { loading } = useContext(OrderContext);

  const { results, modalInfo } = useContext(SearchContext);

  const {
    cardsDayPlates,
    cardsRankingPlates,
    modalPlate,
    modalPlateRequired
  } = useContext(OrderContext);

  useFetchCardsDayPlates();

  useFetchCardsRankingPlates();

  return (
    <>
      {loading ? (
        <div className={styles.mainContainerLoading}>
          <MainLoading />
        </div>
      ) : (
        <>
          <div className={styles.mainContainerHome}>
            <Navbar />
            <CallWaiter />
            <FormSearch />
            <Categories />
            {results.length === 0 ? (
              <MainPlates
                cardsDayPlates={cardsDayPlates}
                cardsRankingPlates={cardsRankingPlates}
              />
            ) : (
              <Plates />
            )}
          </div>
          <Requireds />
          {modalPlate.state && <ModalPlate />}
          {modalPlateRequired.state && <ModalPlateRequired />}
          {modalInfo.state && <ModalInfo />}
        </>
      )}
    </>
  );
};

export default HomePage;
