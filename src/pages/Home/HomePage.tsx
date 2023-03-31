import { useContext, useEffect} from 'react';
import { OrderContext, SearchContext} from '../../context';
import { CallWaiter, Categories, FormSearch, MainLoading, ModalPlate, ModalPlateRequired, ModalInfo } from '../../components/molecules';
import { MainPlates, Plates, Navbar } from '../../components/organisms';
import styles from './HomePage.module.scss';
import { fetchItemPeopleInTable } from '../../services';

const HomePage = () => {

const { results, modalInfo } = useContext(SearchContext);

const {modalPlate, cartTemporary, cartDefinitive, setCartDefinitive ,loading, setCartTemporary} = useContext(OrderContext);


useEffect(()=> {
	if(localStorage.getItem('cartTemporary')) {
		console.log('entre')
		setCartTemporary((JSON.parse(localStorage.getItem('cartTemporary') as any)))
	}
},[])

useEffect(()=> {
	fetchItemPeopleInTable(JSON.parse(localStorage.getItem('idPeopleTableId') as any))
	.then((response) => {
		setCartDefinitive(response)
		console.log(response)
	})
},[]) 


console.log(cartTemporary)



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
					{modalPlate.stateModal && modalPlate.modalType === 'main' && <ModalPlate buttonName='Agregar' />}
					{modalPlate.stateModal && modalPlate.modalType === 'required'  && modalPlate.modalEditOrDeleteOrConfirm === 'temporary'  && <ModalPlateRequired />}
					{modalInfo.state && <ModalInfo />}
				</>
			)}
		</>
	);
};

export default HomePage;
