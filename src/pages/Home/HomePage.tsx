import { useContext, useEffect } from 'react';
import { OrderContext, SearchContext, TableContext } from '../../context';
import { useFetchCardsDayPlates, useFetchCardsRankingPlates, useFetchCardsSpecialsCheff } from '../../hooks';
import { CallWaiter, Categories, FormSearch, MainLoading, ModalPlate, ModalPlateRequired, ModalInfo } from '../../components/molecules';
import { MainPlates, Plates, Navbar } from '../../components/organisms';
import { useSearchParams } from 'react-router-dom';
import { fetchTableStatusCall, updateTableNumberActive } from '../../services';
import styles from './HomePage.module.scss';


const HomePage = () => {

	const { table, setTable, setCall} = useContext(TableContext);

	const [params] = useSearchParams();

	const { results, modalInfo } = useContext(SearchContext);

	const { cardsDayPlates, cardsRankingPlates, modalPlate, modalPlateRequired, cardsSpecialsCheff, loading  } = useContext(OrderContext);

	useEffect(() => {
		setTable({
			table_number: params.get('table'),
		});
		updateTableNumberActive(params.get('table'));
		fetchTableStatusCall(table.table_number)
		.then((data) => {
			setCall(data)
		})
	}, [table.table_number, params, setCall, setTable]);

 	useFetchCardsDayPlates();

	useFetchCardsRankingPlates(); 

	useFetchCardsSpecialsCheff();

	return (
		<>
			{loading ? (
				<div className={styles.mainContainerLoading}>
					<MainLoading />
				</div>
			) : (
				<>
					<Navbar />
					<div className={styles.mainContainerHome}>
						<CallWaiter />
						<FormSearch />
						<Categories />
						{results.length === 0 ? (
							<MainPlates cardsDayPlates={cardsDayPlates} cardsRankingPlates={cardsRankingPlates} cardsSpecialsCheff={cardsSpecialsCheff} />
						) : (
							<Plates />
						)}
						<footer className={styles.footer}>© my order todos los derechos reservados</footer>
					</div>
					{modalPlate.state && <ModalPlate buttonName='Solicitar' />}
					{modalPlateRequired.state && <ModalPlateRequired />}
					{modalInfo.state && <ModalInfo />}
				</>
			)}
		</>
	);
};

export default HomePage;
