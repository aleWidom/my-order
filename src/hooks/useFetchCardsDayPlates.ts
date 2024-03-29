import { useEffect, useContext } from 'react';
import { OrderContext } from '../context';

export const useFetchCardsDayPlates = () => {
	const { itemsRestaurant, setCardsDayPlates } = useContext(OrderContext);

	//TODO ARREGLAR ANYS EN DATA
	useEffect(() => {


	  const cardsDay = itemsRestaurant?.filter((item) => {
		 if(item.ItemID === '37' || item.ItemID === '85' || item.ItemID === '81' || item.ItemID === '111') {
			return item
		} 
	  })
	  setCardsDayPlates(cardsDay)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [itemsRestaurant]);
};
