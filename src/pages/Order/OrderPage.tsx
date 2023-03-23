import { useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { OrderContext} from '../../context';
import { Navbar } from '../../components/organisms';
import { ModalPlate, ModalPlateRequired, OrderPlateConfirmed, OrderPlateUnConfirmed} from '../../components/molecules';
import styles from './OrderPage.module.scss';
import { fetchItemPeopleInTable, itemPeopleInTable } from '../../services';


const OrderPage = () => {
	const { modalPlate, cartTemporary, cartDefinitive, setCartTemporary, setCartDefinitive } = useContext(OrderContext)

	const  numberTable = JSON.parse(localStorage.getItem('table') as any)

	useEffect(()=> {
		if(localStorage.getItem('cartTemporary')) {
			setCartTemporary((JSON.parse(localStorage.getItem('cartTemporary') as any)))
		}
		fetchItemPeopleInTable('03c4a3af-c072-4f77-820a-16b884b0ac19')
		.then((response)=> {
			setCartDefinitive(response)
		})
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	useEffect(()=> {
		fetchItemPeopleInTable('03c4a3af-c072-4f77-820a-16b884b0ac19')
		.then((response) => {
			setCartDefinitive(response)
		})
	},[cartDefinitive])

	const handleConfirmRequest = () => {
		cartTemporary.map((e)=> {
			 itemPeopleInTable(uuidv4(),'03c4a3af-c072-4f77-820a-16b884b0ac19', e.quantity, e.ItemID)
		})

		setCartTemporary([])
		localStorage.removeItem('cartTemporary')
	}

	return (
		<>
			<div className={styles.mainContainerOrder}>
				<Navbar />
					{cartTemporary.length ? 
					<>
						<h2 className={styles.titleOrderUnconfirmed}>Tu Pedido</h2>
						<OrderPlateUnConfirmed/>
						<button className={styles.confirm} onClick={handleConfirmRequest}>Confirmar Pedido</button>
					</>: ''}
					{cartDefinitive.length ?
					<div className={styles.containerOrderConfirmed}>
						<h2 className={styles.titleOrderConfirmed}>Pedidos en preparación / entregados</h2>
						<OrderPlateConfirmed/>
					</div> : ''}	
				 {cartTemporary.length === 0 && cartDefinitive.length === 0 &&
					<div className={styles.withoutRequestContainer}>
						<p>Sin solicitudes en su mesa.</p>
					</div>
				} 
			</div>
			{modalPlate.stateModal && modalPlate.modalType === 'main' && modalPlate.modalEditOrDelete === 'edit' && (
				<ModalPlate buttonName='Editar' />
			)}
			{modalPlate.stateModal && modalPlate.modalType === 'main' && modalPlate.modalEditOrDelete === 'delete' && (
				<ModalPlate buttonName='Eliminar' />
			)}
			{modalPlate.stateModal && modalPlate.modalType === 'required' && modalPlate.modalEditOrDelete === 'edit' && <ModalPlateRequired />}
			{modalPlate.stateModal && modalPlate.modalType === 'required' && modalPlate.modalEditOrDelete === 'delete' && <ModalPlateRequired />}
		</>
	);
};

export default OrderPage;
