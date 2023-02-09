import { useContext, useEffect } from 'react';
import { FaBell, FaRegCheckCircle } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { OrderContext } from '../../../../context';
import styles from './ModalPlateRequired.module.scss';

export const ModalPlateRequired = () => {
	const { modalPlate, setModalPlate } = useContext(OrderContext);

	const { pathname } = useLocation();

	const page = pathname.slice(-5);
	

	useEffect(() => {
		setTimeout(() => {
			setModalPlate({
				id: `${0}`,
				title: '',
				quantity: 1,
				state: false,
				description: "",
				price: "",
				modalType: 'main',
			});
			 
		}, 4000);
	}, [setModalPlate]);

	return (
		<div className={styles.containerModalPlate}>
			<div className={styles.modalPlate}>
				{page === '/' && (
					<div className={styles.containerAdd}>
						<FaRegCheckCircle className={styles.check} />
						<small>Solicitud agregada</small>
					</div>
				)}
				{page !== '/' && modalPlate.modalType === 'required' && modalPlate.modalEditOrDelete === 'edit' && (
					<div className={styles.containerAdd}>
						<FaRegCheckCircle className={styles.check} />
						<small>Solicitud Editada</small>
					</div>
				)}
				{page !== '/' &&  modalPlate.modalType === 'required' && modalPlate.modalEditOrDelete === 'delete' && (
					<div className={styles.containerSubstract}>
						<small>Solicitud Eliminada</small>
					</div>
				)}
				<h2 className={styles.title}>{modalPlate.title}</h2>
				{page !== '/' &&  modalPlate.modalType === 'required' && modalPlate.modalEditOrDelete === 'edit' ? (
					<p className={styles.quantity}>Nueva cantidad solicitada: {`${modalPlate.quantity} u.`}</p>
				) : (
					<p className={styles.quantity}>Cantidad: {`${modalPlate.quantity} u.`}</p>
				)}
				{page === '/' && (
					<>
						<small className={styles.edit}>Para editar la orden puede ir a sección mis solicitudes</small>
						<FaBell className={styles.edit} style={{ marginLeft: '0.4rem' }} />
					</>
				)}
			</div>
		</div>
	);
};
