import { useContext } from 'react';
import { OrderContext } from '../../context/order/OrderContext';
import { Navbar } from '../../components/organisms';
import { ModalPlate, ModalPlateRequired, OrderPlate } from '../../components/molecules';
import styles from './OrderPage.module.scss';

const OrderPage = () => {
	const { modalPlate, modalPlateRequired } = useContext(OrderContext);

	return (
		<>
			<div className={styles.mainContainerOrder}>
				<Navbar />
				<h2 className={styles.title}>Mis solicitudes</h2>
				<OrderPlate />
			</div>
			{modalPlate.state && modalPlate.section === 'edit' && <ModalPlate buttonName={'Editar'} />}
			{modalPlate.state && modalPlate.section === 'delete' && <ModalPlate buttonName={'Eliminar'} />}
			{modalPlateRequired.state && <ModalPlateRequired />}
		</>
	);
};

export default OrderPage;
