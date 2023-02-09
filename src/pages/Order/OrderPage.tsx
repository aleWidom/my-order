import { useContext } from 'react';
import { OrderContext } from '../../context/order/OrderContext';
import { Navbar } from '../../components/organisms';
import { ModalPlate, ModalPlateRequired, OrderPlate } from '../../components/molecules';
import styles from './OrderPage.module.scss';

const OrderPage = () => {
	const { modalPlate, cart } = useContext(OrderContext);

	return (
		<>
			<div className={styles.mainContainerOrder}>
				<Navbar />
				{cart.length > 0 ?
					<>
						<h2 className={styles.title}>Mis solicitudes</h2>
						<OrderPlate />
					</> :
					<div className={styles.withoutRequestContainer}>
						<p >Sin solicitudes en su mesa.</p>
					</div>}
			</div>
			{modalPlate.state && modalPlate.modalType === 'main' && modalPlate.modalEditOrDelete === 'edit' && <ModalPlate buttonName='Editar' />}
			{modalPlate.state && modalPlate.modalType === 'main' && modalPlate.modalEditOrDelete === 'delete' && <ModalPlate buttonName='Eliminar' />}
			{modalPlate.state && modalPlate.modalType === 'required' && modalPlate.modalEditOrDelete === 'edit' && <ModalPlateRequired/>}
			{modalPlate.state && modalPlate.modalType === 'required' && modalPlate.modalEditOrDelete === 'delete' && <ModalPlateRequired />}
		</>
	);
};

export default OrderPage;