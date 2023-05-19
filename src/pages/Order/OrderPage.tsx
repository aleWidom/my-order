import { useContext } from 'react';

import { OrderContext } from '../../context';
import { useFetchCarts } from '../../hooks';
import { Navbar } from '../../components/organisms';
import { ModalPlate, ModalPlateRequired, OrderPlateConfirmed, OrderPlateUnConfirmed } from '../../components/molecules';
import styles from './OrderPage.module.scss';


const OrderPage = () => {
	const { modalPlate, cartTemporary, cartDefinitive} = useContext(OrderContext)

	useFetchCarts()

	return (
		<>
			<div className={styles.mainContainerOrder}>
				<Navbar />
				{cartTemporary?.length ?
					<>
						<OrderPlateUnConfirmed />
						
					</> : ''}
				{cartDefinitive?.length ?
						<OrderPlateConfirmed />
					: ''}
				{cartTemporary?.length === 0 && cartDefinitive?.length === 0 &&
					<div className={styles.withoutRequestContainer}>
						<p className={styles.emptyCart}>Sin solicitudes en su mesa.</p>
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


