import { useContext } from 'react';
import { OrderContext } from '../../../../context/order/OrderContext';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { PlateSelected } from '../../../../interfaces/interfaces';
import styles from './OrderPlate.module.scss';
import { updateItemsAccordingPeopleInTableID } from '../../../../services';

export const OrderPlate = () => {
	const { cart, modalPlate, setModalPlate } = useContext(OrderContext);

	const handleEdit = (cartProduct: PlateSelected) => () => {
	
		updateItemsAccordingPeopleInTableID('dada')

		setModalPlate({
			...modalPlate,
			id: cartProduct.id,
			state: true,
			title: cartProduct.title,
			price: cartProduct.price,
			description: cartProduct.description,
			quantity: cartProduct.quantity,
			modalType: 'main',
			modalEditOrDelete: 'edit'

		});
	};

	const handleDelete = (cartProduct: PlateSelected) => () => {
		setModalPlate({
			...modalPlate,
			id: cartProduct.id,
			state: true,
			title: cartProduct.title,
			price: cartProduct.price,
			description: cartProduct.description,
			quantity: cartProduct.quantity,
			modalType: 'main',
			modalEditOrDelete: 'delete'
		});
	};

	return (
		<>
			{cart.map((cartProduct) => (
				<div key={cartProduct.id} className={styles.containerCardOrder}>
					<div className={styles.containerDescription}>
						<h4>{cartProduct.title}</h4>
						<small>Cantidad: {cartProduct.quantity}</small>
						<small className={styles.state}>Su pedido se esta preparando.</small>
					</div>
					<div className={styles.editDelete}>
						<FaEdit onClick={handleEdit(cartProduct)} className={styles.edit} />
						<FaTrashAlt onClick={handleDelete(cartProduct)} className={styles.delete} />
					</div>
				</div>
			))}
		</>
	);
};
