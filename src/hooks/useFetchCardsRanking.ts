import { useEffect, useContext } from 'react';
import { OrderContext } from '../context';
import { getItemsCardsRanking } from '../services';

export const useFetchCardsRankingPlates = () => {
	const { setCardsRankingPlates } = useContext(OrderContext);

	useEffect(() => {
		getItemsCardsRanking().then(({ data }: any) => {
			setCardsRankingPlates(data);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};
