import { useContext, useEffect } from 'react';
import { FaBell, FaRegCheckCircle, FaTrashAlt } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { OrderContext } from '../../../../context';
import styles from './ModalPlateRequired.module.scss';

export const ModalPlateRequired = () => {
	const { modalPlateRequired, setModalPlateRequired } = useContext(OrderContext);

	const { pathname } = useLocation();

	const page = pathname.slice(-5);

	useEffect(() => {
		setTimeout(() => {
			setModalPlateRequired({
				id: 0,
				title: '',
				quantity: 1,
				state: false,
				section: '',
			});
		}, 4000);
	}, [setModalPlateRequired]);

	return (
		<div className={styles.containerModalPlate}>
			<div className={styles.modalPlate}>
				{page === '/' &&
					<div className={styles.containerAdd}>
						<FaRegCheckCircle className={styles.check} />
						<small>Solicitud agregada</small>
					</div>}
					{page !== '/' && modalPlateRequired.section === 'edit' &&
					<div className={styles.containerAdd}>
						<FaRegCheckCircle className={styles.check} />
						<small>Solicitud Editada</small>
					</div>}
					{page !== '/' && modalPlateRequired.section === 'delete' &&
					<div className={styles.containerSubstract}>
						<small>Solicitud Eliminada</small>
					</div>}
				<h2 className={styles.title}>{modalPlateRequired.title}</h2>
				{page !== '/' && modalPlateRequired.section === 'edit' ? <p className={styles.quantity}>Nueva cantidad solicitada: {`${modalPlateRequired.quantity} u.`}</p> :
				 <p className={styles.quantity}>Cantidad: {`${modalPlateRequired.quantity} u.`}</p>}
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
