import { useContext, useEffect } from 'react';
import { OrderContext, SearchContext, TableContext } from '../../context';
import { useFetchCardsDayPlates, useFetchCardsRankingPlates } from '../../hooks';
import { CallWaiter, Categories, FormSearch, MainLoading, ModalPlate, ModalPlateRequired, ModalInfo } from '../../components/molecules';
import { MainPlates, Plates, Navbar } from '../../components/organisms';
import { useSearchParams } from 'react-router-dom';
import Requireds from '../../components/molecules/section/Requireds';
import styles from './HomePage.module.scss';

const HomePage = () => {
	const { loading } = useContext(OrderContext);

	const { table, setTable } = useContext(TableContext);

	const [params] = useSearchParams();

	const { results, modalInfo } = useContext(SearchContext);

	const { cardsDayPlates, cardsRankingPlates, modalPlate, modalPlateRequired } = useContext(OrderContext);

	useEffect(() => {
		setTable({
			table_number: params.get('table'),
		});
	}, [params, table, setTable]);

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
						{results.length === 0 ? <MainPlates cardsDayPlates={cardsDayPlates} cardsRankingPlates={cardsRankingPlates} /> : <Plates />}
					</div>
					<Requireds />
					{modalPlate.state && <ModalPlate buttonName='Solicitar' />}
					{modalPlateRequired.state && <ModalPlateRequired />}
					{modalInfo.state && <ModalInfo />}
				</>
			)}
		</>
	);
};

export default HomePage;
