import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { OrderContext } from '../../context';
import { itemPeopleInTable } from '../../services';
import { useFetchCarts } from '../../hooks';
import { Navbar } from '../../components/organisms';
import { ModalPlate, ModalPlateRequired, OrderPlateConfirmed, OrderPlateUnConfirmed } from '../../components/molecules';
import styles from './OrderPage.module.scss';


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

	useFetchCarts()

	const handleConfirmRequest = () => {

		//agrego a la base de datos cada uno de los items pedidos y cantidad y a que PeopleTableId corresponde
		cartTemporary.map((e) => (
			itemPeopleInTable(uuidv4().replaceAll('/', 'a'), JSON.parse(localStorage.getItem('idPeopleTableId') as any), e.quantity, e.ItemID)
		))


		
		//seteo como cart Definitivo, el cartTemporary + lo que esta de antes como definitivo, la misma información la guardo en el localstorage
		setCartDefinitive([
			...cartTemporary, ...JSON.parse(localStorage.getItem('cartDefinitive') as any)
		])
		localStorage.setItem('cartDefinitive', JSON.stringify([
			...cartTemporary,
			...JSON.parse(localStorage.getItem('cartDefinitive') as any)
		]))


		//seteo el carrito temporario como vacio, y guardo lo mismo en el local storage
		setCartTemporary([])
		localStorage.setItem('cartTemporary', JSON.stringify([]))


		setModalPlate({
			...modalPlate,
			stateModal: true,
			modalEditOrDeleteOrConfirm: 'confirm',
			modalType: 'required',
		});

	}

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


