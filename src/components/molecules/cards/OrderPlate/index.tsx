import { useContext } from 'react';
import { OrderContext } from '../../../../context/order/OrderContext';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { PlateRestaurant } from '../../../../interfaces/interfaces';
import styles from './OrderPlate.module.scss';

export const OrderPlate = () => {
	const { cart, modalPlate, setModalPlate } = useContext(OrderContext);

	const handleEdit = (cartProduct: PlateRestaurant) => () => {
		setModalPlate({
			...modalPlate,
			id: cartProduct.ItemID,
			state: true,
			title: cartProduct.title,
			price: cartProduct.price,
			description: cartProduct.description,
			quantity: cartProduct.quantity,
			photo: '',
			section: 'edit',
		});
	};

	const handleDelete = (cartProduct: PlateRestaurant) => () => {
		setModalPlate({
			...modalPlate,
			id: cartProduct.ItemID,
			state: true,
			title: cartProduct.title,
			price: cartProduct.price,
			description: cartProduct.description,
			quantity: cartProduct.quantity,
			photo: '',
			section: 'delete',
		});
	};

	return (
		<>
			{cart.map((cartProduct) => (
				<div key={cartProduct.ItemID} className={styles.containerCardOrder}>
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
