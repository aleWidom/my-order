import { MainBrand } from "../../../atoms";
import { OrderContext } from '../../../../context/order/OrderContext';
import BeatLoader from "react-spinners/BeatLoader";
import styles from './MainLoading.module.scss'
import { useActivateTable, useFetchCardsDayPlates, useFetchCardsRankingPlates, useFetchCardsSpecialsCheff, useFetchCategories, useFetchItems, useFetchTable, useIdUnicoPeopleInTable } from "../../../../hooks";
import { useContext, useEffect } from "react";

export const MainLoading = () => {

  const {setLoading, itemsRestaurant, cardsDayPlates }= useContext(OrderContext)

  useFetchItems()

  useFetchCategories();

	useActivateTable()

	useFetchTable()

	useIdUnicoPeopleInTable() 

  useFetchCardsRankingPlates();

	useFetchCardsDayPlates();

	useFetchCardsSpecialsCheff();

  useEffect(()=> {
    console.log(itemsRestaurant)
    console.log(cardsDayPlates)
		if(itemsRestaurant.length && cardsDayPlates.length) {
			setLoading(false)
		}
	}, [itemsRestaurant, cardsDayPlates])

  return (
    <div className={styles.containerLoading}>
      <MainBrand />
      <BeatLoader size={10} color={'#fe0000'} margin={10} />
    </div>
  )
}

