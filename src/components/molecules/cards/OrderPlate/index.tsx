import { useContext, useEffect } from 'react';
import { OrderContext } from '../../../../context/order/OrderContext';
import { TableContext } from '../../../../context/tables/TableContext';
import { fetchItemPeopleInTable, fetchPeopleInTable /* updateItemsQuantityhAccordingPeopleInTableID  */ } from '../../../../services';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { PlateSelected } from '../../../../interfaces/interfaces';
import styles from './OrderPlate.module.scss';

export const OrderPlate = () => {
	const { cartTemporary, modalPlate, setModalPlate, setCartTemporary } = useContext(OrderContext);

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
	}, [setCartTemporary, sittingOnTheTable.id]);

	const handleEdit = (cartProduct: PlateSelected, i:number) => () => {
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
			price: cartProduct.price,
			quantity: cartProduct.quantity,
			modalType: 'main',
			modalEditOrDelete: 'edit',
			index: i
		});
	};

	const handleDelete = (cartProduct: PlateSelected, i:number) => () => {
		setModalPlate({
			...modalPlate,
			stateModal: true,
			price: cartProduct.price,
			title: cartProduct.title,
			quantity: cartProduct.quantity,
			modalType: 'main',
			modalEditOrDelete: 'delete',
			index:i
		});
	};

	return (
		<>
			{cartTemporary.map((cartProduct, i) => (
				<div key={i} className={styles.containerCardOrder}>
					<div className={styles.containerDescription}>
						<h4>{cartProduct.title}</h4>
						<small>Cantidad: {cartProduct.quantity}</small>
						{/* {cartProduct.state === 'delivered' ? (
							<small className={styles.state}>Entregado</small>
						) : (
							<small className={styles.state}>Su pedido se esta preparando.</small>
						)} */}
					</div>
					<div className={styles.editDelete}>
						<FaEdit onClick={handleEdit(cartProduct, i)} className={styles.edit} />
						<FaTrashAlt onClick={handleDelete(cartProduct, i)} className={styles.delete} />
					</div>
				</div>
			))}
		</>
	);
};
