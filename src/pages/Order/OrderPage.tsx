import { useContext, useEffect } from 'react';
import { OrderContext, TableContext } from '../../context';
import { Navbar } from '../../components/organisms';
import { ModalPlate, ModalPlateRequired, OrderPlate } from '../../components/molecules';
import styles from './OrderPage.module.scss';

const OrderPage = () => {
	const { modalPlate, cartTemporary, cartDefinitive, setCartTemporary } = useContext(OrderContext)

	const { setSittingOnTheTable } = useContext(TableContext)

	useEffect(()=> {
		setSittingOnTheTable(JSON.parse(localStorage.getItem('table')as any))
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	useEffect(()=> {
		if(localStorage.getItem('cartTemporary')) {
			setCartTemporary((JSON.parse(localStorage.getItem('cartTemporary') as any)))
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	return (
		<>
			<div className={styles.mainContainerOrder}>
				<Navbar />
				{cartTemporary.length || cartDefinitive.length > 0 ? (
					<>
						<h2 className={styles.title}>Mis solicitudes</h2>
						<OrderPlate />
					</>
				) : (
					<div className={styles.withoutRequestContainer}>
						<p>Sin solicitudes en su mesa.</p>
					</div>
				)}
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
