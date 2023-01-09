import { useEffect, useContext } from 'react';
import { OrderContext } from '../context';
import { getItemsCardsSpecialsCheff } from '../services';

export const useFetchCardsSpecialsCheff = () => {
	const { setCardsSpecialsCheff, setLoading} = useContext(OrderContext);

	

	//TODO ARREGLAR ANYS EN DATA
	useEffect(() => {
		getItemsCardsSpecialsCheff().then(({ data }: any) => {
			setCardsSpecialsCheff(data);
			console.log('useFetchCardsSpecialsCheff ')
			setLoading(false);
		});
	}, [setCardsSpecialsCheff, setLoading]);
};
