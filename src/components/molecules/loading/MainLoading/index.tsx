import { MainBrand } from "../../../atoms";
import { OrderContext } from '../../../../context/order/OrderContext';
import BeatLoader from "react-spinners/BeatLoader";
import styles from './MainLoading.module.scss'
import {useFetchCallTable, useFetchCardsDayPlates, useFetchCardsRankingPlates, useFetchCardsSpecialsCheff, useFetchCategories, useFetchItems, useFetchTable} from "../../../../hooks";
import { useContext, useEffect } from "react";

export const MainLoading = () => {

  const {setLoading, itemsRestaurant, cardsDayPlates, cardsRankingPlates, cardsSpecialsCheff }= useContext(OrderContext)

  useFetchItems()

  useFetchCategories();

  useFetchTable()

  useFetchCallTable()
  
  useFetchCardsRankingPlates();

	useFetchCardsDayPlates();

	useFetchCardsSpecialsCheff();
  

  useEffect(()=> {
		if(itemsRestaurant.length && cardsDayPlates.length && cardsRankingPlates.length && cardsSpecialsCheff.length && localStorage.getItem('idPeopleTableId')) {
			setLoading(false)
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [itemsRestaurant, cardsDayPlates, cardsRankingPlates, cardsSpecialsCheff ])

  return (
    <div className={styles.containerLoading}>
      <MainBrand />
      <BeatLoader size={5} color={'#fff'} margin={2} />
    </div>
  )
}

