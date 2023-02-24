import { useContext, useEffect } from 'react';
import { OrderContext } from '../../../../context/order/OrderContext';
import { TableContext } from '../../../../context/tables/TableContext';
import { fetchItemPeopleInTable, fetchPeopleInTable /* updateItemsQuantityhAccordingPeopleInTableID  */ } from '../../../../services';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { PlateSelected } from '../../../../interfaces/interfaces';
import styles from './OrderPlate.module.scss';

export const OrderPlate = () => {
	const { cart, modalPlate, setModalPlate, setCart } = useContext(OrderContext);

	const { sittingOnTheTable } = useContext(TableContext);

	useEffect(() => {
		setInterval(() => {
			/* fetchPeopleInTable(sittingOnTheTable.id).then((response) => {
				fetchItemPeopleInTable(response[0].PeopleInTableID)
					.then((data) => {
						setCart(data);
					})
					.catch((err) => {
						console.log(err);
					});
			}); */
		}, 10000);
	}, [setCart, sittingOnTheTable.id]);

	const handleEdit = (cartProduct: PlateSelected) => () => {
		fetchPeopleInTable(sittingOnTheTable.id)
			.then((data) => {
				console.log(data[0]);
				/* updateItemsQuantityhAccordingPeopleInTableID('dada') */
			})
			.catch((err) => {
				console.log(err);
			});

		setModalPlate({
			...modalPlate,
			stateModal: true,
			title: cartProduct.title,
			quantity: cartProduct.quantity,
			modalType: 'main',
			modalEditOrDelete: 'edit',
		});
	};

	const handleDelete = (cartProduct: PlateSelected) => () => {
		setModalPlate({
			...modalPlate,
			stateModal: true,
			title: cartProduct.title,
			quantity: cartProduct.quantity,
			modalType: 'main',
			modalEditOrDelete: 'delete',
		});
	};

	return (
		<>
			{cart.map((cartProduct) => (
				<div key={cartProduct.ItemID} className={styles.containerCardOrder}>
					<div className={styles.containerDescription}>
						<h4>{cartProduct.title}</h4>
						<small>Cantidad: {cartProduct.quantity}</small>
						{cartProduct.state === 'delivered' ? (
							<small className={styles.state}>Entregado</small>
						) : (
							<small className={styles.state}>Su pedido se esta preparando.</small>
						)}
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
