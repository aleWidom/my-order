import { useContext} from 'react';
import { OrderContext } from '../../../../context/order/OrderContext';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { PlateSelected } from '../../../../interfaces/interfaces';
import styles from './OrderPlateUnconfirmed.module.scss';


export const OrderPlateUnConfirmed = () => {

	const {cartTemporary, modalPlate, setModalPlate, setCartTemporary } = useContext(OrderContext);
	
	const handleEdit = (cartProduct: PlateSelected, i: number) => () => {
		/* fetchPeopleInTable(sittingOnTheTable)
			.then((data) => {
				console.log(data[0]);
				 updateItemsQuantityhAccordingPeopleInTableID('dada') 
			})
			.catch((err) => {
				console.log(err);
			}); */

		setModalPlate({
			...modalPlate,
			stateModal: true,
			title: cartProduct.title,
			price: cartProduct.price,
			quantity: cartProduct.quantity,
			modalType: 'main',
			modalEditOrDeleteOrConfirm: 'edit',
			index: i
		});


	/* 	const editItem = cartTemporary.filter((e, index) => {
			
			if (i === index) {
				e.quantity = cartProduct.quantity
			}
			return e
		})
 */
	/* 	console.log('cartTemporary')

		setCartTemporary(editItem)

		localStorage.setItem('cartTemporary', JSON.stringify(editItem)) */
	};


	const handleDelete = (cartProduct: PlateSelected, i: number) => () => {
		setModalPlate({
			...modalPlate,
			stateModal: true,
			price: cartProduct.price,
			title: cartProduct.title,
			quantity: cartProduct.quantity,
			modalType: 'main',
			modalEditOrDeleteOrConfirm: 'delete',
			index: i
		});
	};

	return (
		<>
			{cartTemporary.map((cartProduct,i) => (
					<div key={i} className={styles.containerCardOrder}>
						<div className={styles.containerDescription}>
							<h4>{cartProduct?.title}</h4>
							<small>Cantidad: {cartProduct?.quantity}</small>
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
