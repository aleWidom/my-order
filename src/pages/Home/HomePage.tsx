import { useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { OrderContext, SearchContext, TableContext } from '../../context';
import { useFetchCardsDayPlates, useFetchCardsRankingPlates, useFetchCardsSpecialsCheff } from '../../hooks';
import { CallWaiter, Categories, FormSearch, MainLoading, ModalPlate, ModalPlateRequired, ModalInfo } from '../../components/molecules';
import { MainPlates, Plates, Navbar } from '../../components/organisms';
import { useSearchParams } from 'react-router-dom';
import { fetchTableStatusCall, peopleInTable, updateTableNumberActive } from '../../services';
import styles from './HomePage.module.scss';
/* import { AdminContext } from '../../context/adm/AdminContext'; */


const HomePage = () => {

	const { sittingOnTheTable, setSittingOnTheTableCall, setSittingOnTheTable} = useContext(TableContext);

	const [params] = useSearchParams();

	const { results, modalInfo } = useContext(SearchContext);

	const { cardsDayPlates, cardsRankingPlates, modalPlate, modalPlateRequired, cardsSpecialsCheff, loading  } = useContext(OrderContext);
/* 
	const {tablesRestaurant, setTablesRestaurant} = useContext(AdminContext); */

	useEffect(() => {
		setSittingOnTheTable({
			TableID: params.get('table'),
		});
		updateTableNumberActive(params.get('table'));
		peopleInTable(uuidv4(), sittingOnTheTable.TableID)
/* 		setTablesRestaurant() */
		fetchTableStatusCall(sittingOnTheTable.TableID)
		.then((data) => {
			setSittingOnTheTableCall(data)
		})
	}, [sittingOnTheTable.TableID, params, setSittingOnTheTableCall, setSittingOnTheTable]);

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
