import { useEffect, useContext } from 'react';
import { OrderContext } from '../context';


export const useFetchCardsSpecialsCheff = () => {
	const { itemsRestaurant, setCardsSpecialsCheff, setLoading } = useContext(OrderContext);

	//TODO ARREGLAR ANYS EN DATA
	useEffect(() => {
		const ranking = itemsRestaurant?.filter((item) => {
			if(item.ItemID === '47' || item.ItemID === '72' || item.ItemID === '89') {
			   return item
		   } 
		 })
		 setCardsSpecialsCheff(ranking)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [itemsRestaurant]);
};
