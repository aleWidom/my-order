import { useContext, useEffect } from 'react';
import { OrderContext, SearchContext} from '../../context';
import { CallWaiter, Categories, FormSearch, MainLoading, ModalPlate, ModalPlateRequired, ModalInfo } from '../../components/molecules';
import { MainPlates, Plates, Navbar } from '../../components/organisms';

import styles from './HomePage.module.scss';



const HomePage = () => {

const { results, modalInfo } = useContext(SearchContext);

	const {modalPlate,  loading, itemsRestaurant} = useContext(OrderContext);

	


	useEffect(() => {
	}, [/* sittingOnTheTable.id, params, setSittingOnTheTableCall, setSittingOnTheTable */]);

	useEffect(
		() => {
			/* 	fetchPeopleInTable(sittingOnTheTable.id).then((response) => {
				fetchItemPeopleInTable(response[0].PeopleInTableID)
					.then((data) => {
						setCart(data);
					})
					.catch((err) => {
						console.log(err);
					});
			}); */
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[
			/* setCart, sittingOnTheTable.id */
		]
	);

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
							<MainPlates/>
						) : (
							<Plates />
						)}
						<footer className={styles.footer}>© my order todos los derechos reservados</footer>
					</div>
					{modalPlate.stateModal && modalPlate.modalType === 'main' && <ModalPlate buttonName='Solicitar' />}
					{modalPlate.stateModal && modalPlate.modalType === 'required' && <ModalPlateRequired />}
					{modalInfo.state && <ModalInfo />}
				</>
			)}
		</>
	);
};

export default HomePage;
