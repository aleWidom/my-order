import { useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { OrderContext } from '../../context';
import { Navbar } from '../../components/organisms';
import { ModalPlate, ModalPlateRequired, OrderPlateConfirmed, OrderPlateUnConfirmed } from '../../components/molecules';
import styles from './OrderPage.module.scss';
import { fetchItemPeopleInTable, itemPeopleInTable } from '../../services';


const OrderPage = () => {
	const { modalPlate, setModalPlate, cartTemporary, cartDefinitive, setCartTemporary, setCartDefinitive } = useContext(OrderContext)

	/* 	const  numberTable = JSON.parse(localStorage.getItem('table') as any) */

	/* 	useEffect(()=> {
			fetchItemPeopleInTable(JSON.parse(localStorage.getItem('idPeopleTableId') as any))
			.then((response) => {
				setCartDefinitive(response)
				console.log(response)
			})
	
		},[]) */



	useEffect(() => {
		if(localStorage.getItem('cartTemporary')) {
			setCartTemporary(JSON.parse(localStorage.getItem('cartTemporary') as any))
		}
		if (localStorage.getItem('cartDefinitive')) {
			setCartDefinitive(JSON.parse(localStorage.getItem('cartDefinitive') as any))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const handleConfirmRequest = () => {

		cartTemporary.map((e) => (
			itemPeopleInTable(uuidv4().replaceAll('/', 'a'), JSON.parse(localStorage.getItem('idPeopleTableId') as any), e.quantity, e.ItemID)
		))

		/* 	if (!localStorage.getItem('cartDefinitive')) {
				fetchItemPeopleInTable(JSON.parse(localStorage.getItem('idPeopleTableId') as any))
					.then((response) => {
						localStorage.setItem('cartDefinitive', JSON.stringify(response))
						setCartDefinitive(response)
					})
			}
			else {
				localStorage.setItem('cartDefinitive', JSON.stringify([
					...cartTemporary,
					...JSON.parse(localStorage.getItem('cartDefinitive') as any)
				]))
	
				console.log(localStorage.getItem('cartDefinitive'))
	
				setCartDefinitive([
					...cartTemporary, ...JSON.parse(localStorage.getItem('cartDefinitive') as any)
				])
			} */

		fetchItemPeopleInTable(JSON.parse(localStorage.getItem('idPeopleTableId') as any))
			.then((response) => {
				localStorage.setItem('cartDefinitive', JSON.stringify(response)) 
				setCartDefinitive(response)
			})

		setCartTemporary([])
		localStorage.setItem('cartTemporary', JSON.stringify([]))


	 setModalPlate({
			...modalPlate,
			stateModal: true,
			modalEditOrDeleteOrConfirm: 'confirm',
			modalType: 'required',
		}); 

	}

	console.log(cartTemporary)

	return (
		<>
			<div className={styles.mainContainerOrder}>
				<Navbar />
				{cartTemporary?.length ?
					<>
						<h2 className={styles.titleOrderUnconfirmed}>Tu Pedido</h2>
						<OrderPlateUnConfirmed />
						<button className={styles.confirm} onClick={handleConfirmRequest}>Confirmar Pedido</button>
					</> : ''}
				{cartDefinitive?.length ?
					<div className={styles.containerOrderConfirmed}>
						<h2 className={styles.titleOrderConfirmed}>Pedidos en preparación / entregados</h2>
						<OrderPlateConfirmed />
					</div> : ''}
				{cartTemporary?.length === 0 && cartDefinitive?.length === 0 &&
					<div className={styles.withoutRequestContainer}>
						<p>Sin solicitudes en su mesa.</p>
					</div>
				}
			</div>
			{modalPlate.stateModal && modalPlate.modalType === 'main' && modalPlate.modalEditOrDeleteOrConfirm === 'edit' && (
				<ModalPlate buttonName='Editar' />
			)}
			{modalPlate.stateModal && modalPlate.modalType === 'main' && modalPlate.modalEditOrDeleteOrConfirm === 'delete' && (
				<ModalPlate buttonName='Eliminar' />
			)}
			{modalPlate.stateModal && modalPlate.modalType === 'required' && modalPlate.modalEditOrDeleteOrConfirm === 'edit' && <ModalPlateRequired />}
			{modalPlate.stateModal && modalPlate.modalType === 'required' && modalPlate.modalEditOrDeleteOrConfirm === 'delete' && <ModalPlateRequired />}
			{modalPlate.stateModal && modalPlate.modalType === 'required' && modalPlate.modalEditOrDeleteOrConfirm === 'confirm' && <ModalPlateRequired />}
		</>
	);
};

export default OrderPage;


