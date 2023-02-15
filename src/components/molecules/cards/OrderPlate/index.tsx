import { useContext} from 'react';
import { OrderContext } from '../../../../context/order/OrderContext';
import { TableContext } from '../../../../context/tables/TableContext';
import {fetchPeopleInTable,  /* updateItemsQuantityhAccordingPeopleInTableID  */} from '../../../../services';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { PlateSelected } from '../../../../interfaces/interfaces';
import styles from './OrderPlate.module.scss';

export const OrderPlate = () => {
	const { cart, modalPlate, setModalPlate } = useContext(OrderContext);

	const {sittingOnTheTable} = useContext(TableContext)

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
			state: true,
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
			state: true,
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


