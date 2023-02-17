import { useContext, useEffect} from 'react';
import { OrderContext } from '../../../../context/order/OrderContext';
import { TableContext } from '../../../../context/tables/TableContext';
import {fetchOrderItem, fetchPeopleInTable,  /* updateItemsQuantityhAccordingPeopleInTableID  */} from '../../../../services';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { PlateSelected } from '../../../../interfaces/interfaces';
import styles from './OrderPlate.module.scss';

export const OrderPlate = () => {
	const { cart, modalPlate, setModalPlate, setCart } = useContext(OrderContext);

	const {sittingOnTheTable} = useContext(TableContext)

	/* useEffect(() => {
		setInterval(() => {
				fetchOrderItem().then((data) => {
					return setCart(data);
				})
				.catch((e) => {
					console.log(e);
				});
		}, 10000);
	}, [setCart]); */
	

	const handleEdit = (cartProduct: PlateSelected) => () => {
	
		fetchPeopleInTable(sittingOnTheTable.id)
		.then((data)=> {
			console.log(data[0])
		/* updateItemsQuantityhAccordingPeopleInTableID('dada') */
		})
		.catch((err) => {
			console.log(err)
		})

		setModalPlate({
			...modalPlate,
			ItemID: cartProduct.ItemID,
			stateModal: true,
			title: cartProduct.title,
			price: cartProduct.price,
			description: cartProduct.description,
			quantity: cartProduct.quantity,
			modalType: 'main',
			modalEditOrDelete: 'edit',
			ItemPeopleInTableID: cartProduct.ItemPeopleInTableID			

		});
	};

	const handleDelete = (cartProduct: PlateSelected) => () => {
		setModalPlate({
			...modalPlate,
			ItemID: cartProduct.ItemID,
			stateModal: true,
			title: cartProduct.title,
			price: cartProduct.price,
			description: cartProduct.description,
			quantity: cartProduct.quantity,
			modalType: 'main',
			modalEditOrDelete: 'delete',
			ItemPeopleInTableID: cartProduct.ItemPeopleInTableID	
		});
	};

	return (
		<>
			{cart.map((cartProduct) => (
				<div key={cartProduct.ItemPeopleInTableID} className={styles.containerCardOrder}>
					<div className={styles.containerDescription}>
						<h4>{cartProduct.title}</h4>
						<small>Cantidad: {cartProduct.quantity}</small>
						{cartProduct.state === 'delivered' ? <small className={styles.state}>Entregado</small>
						:<small className={styles.state}>Su pedido se esta preparando.</small>}
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


