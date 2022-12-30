import { useContext, useEffect } from 'react';
import { FaBell } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { FaRegGrinAlt } from 'react-icons/fa';
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
				{(page === '/' || modalPlateRequired.section === 'edit') && <FaRegGrinAlt className={styles.emoji} />}
				<h2 className={styles.title}>{page === '/' && `Su ${modalPlateRequired.title} llegará en unos minutos.`}</h2>
				<h2 className={styles.title}>
					{page !== '/' &&
						modalPlateRequired.section === 'edit' &&
						`Su cantidad ${modalPlateRequired.title} ha sido modificada correctamente.`}
				</h2>
				<h2 className={styles.title}>
					{page !== '/' &&
						modalPlateRequired.section === 'delete' &&
						`Su solicitud ${modalPlateRequired.title} ha sido eliminado correctamente.`}
				</h2>
				<p className={styles.quantity}>Cantidad: {`${modalPlateRequired.quantity}`}</p>
				{page === '/' && (
					<div className={styles.edit}>
						<small>Para editar la orden puede ir a sección mis solicitudes</small>
						<FaBell style={{ marginLeft: '0.4rem' }} />
					</div>
				)}
			</div>
		</div>
	);
};
