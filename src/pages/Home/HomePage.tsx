import { useContext } from "react";
import { Link } from "react-router-dom";
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
} from "../../components/molecules";
import { MainPlates, Plates, Navbar } from "../../components/organisms";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const { loading } = useContext(OrderContext);

  const { results } = useContext(SearchContext);

  const {
    cardsDayPlates,
    cardsRankingPlates,
    modalPlate,
    modalPlateRequired,
    cart,
  } = useContext(OrderContext);

  useFetchCardsDayPlates();

  useFetchCardsRankingPlates();

  console.log(cart);

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
          {modalPlate.state && <ModalPlate />}
          {modalPlateRequired.state && <ModalPlateRequired />}
          {cart.length > 0 && (
            <Link to={"/order"}>{`Mis solicitudes: ${cart.length}`}</Link>
          )}
        </>
      )}
    </>
  );
};

export default HomePage;
