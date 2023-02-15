import { useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { OrderContext, SearchContext, TableContext } from '../../context';
import { useFetchCardsDayPlates, useFetchCardsRankingPlates, useFetchCardsSpecialsCheff } from '../../hooks';
import { CallWaiter, Categories, FormSearch, MainLoading, ModalPlate, ModalPlateRequired, ModalInfo } from '../../components/molecules';
import { MainPlates, Plates, Navbar } from '../../components/organisms';
import { useSearchParams } from 'react-router-dom';
import { fetchItemPeopleInTable, fetchPeopleInTable, fetchTable, peopleInTable, updateTableNumberActive } from '../../services';
import styles from './HomePage.module.scss';

const HomePage = () => {

	const { sittingOnTheTable, setSittingOnTheTableCall, setSittingOnTheTable} = useContext(TableContext);

	const [params] = useSearchParams();

	const { results, modalInfo } = useContext(SearchContext);

	const { cardsDayPlates, cardsRankingPlates, modalPlate, cardsSpecialsCheff, loading, setCart  } = useContext(OrderContext);

	useEffect(() => {
		setSittingOnTheTable({
			id: params.get('table'),
		});
		updateTableNumberActive(params.get('table'));
		fetchTable(sittingOnTheTable.id)
		.then((data) => {
			if(data?.table_active !== '1' ) {				
				const idPeopleInTableUuid = uuidv4();
				peopleInTable(idPeopleInTableUuid , sittingOnTheTable.id)		
			} 
			if(data?.table_call === '1' ) {
				setSittingOnTheTableCall(true)
			} else {
				setSittingOnTheTableCall(false)
			}
		})
	}, [sittingOnTheTable.id, params, setSittingOnTheTableCall, setSittingOnTheTable]);


	useEffect(() => {
		fetchPeopleInTable(sittingOnTheTable.id)
		.then((response)=> {
			fetchItemPeopleInTable(response[0].PeopleInTableID)
			.then((data)=> {
				setCart(data)
			})
			.catch((err)=> {
				console.log(err)
			})	
		})
	}, [setCart, sittingOnTheTable.id ])

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
					{modalPlate.state && modalPlate.modalType === 'main' && <ModalPlate buttonName='Solicitar'/>}
					{modalPlate.state && modalPlate.modalType === 'required' && <ModalPlateRequired />}
					{modalInfo.state && <ModalInfo />}
				</>
			)}
		</>
	);
};

export default HomePage;
