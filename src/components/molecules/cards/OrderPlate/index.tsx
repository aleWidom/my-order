import { useContext } from 'react';
import { OrderContext } from '../../../../context/order/OrderContext';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Plate } from '../../../../interfaces';
import styles from './OrderPlate.module.scss';

export const OrderPlate = () => {
	const { cart, modalPlate, setModalPlate } = useContext(OrderContext);

	const handleEdit = (cartProduct: Plate) => () => {
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

	const handleDelete = (cartProduct: Plate) => () => {
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
						<small className={styles.state}>Preparando su solicitud</small>
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
