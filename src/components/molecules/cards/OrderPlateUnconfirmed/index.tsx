import { useContext} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { OrderContext } from '../../../../context/order/OrderContext';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { PlateSelected } from '../../../../interfaces/interfaces';
import { itemPeopleInTable } from '../../../../services';
import styles from './OrderPlateUnconfirmed.module.scss';


export const OrderPlateUnConfirmed = () => {

	const {cartTemporary, modalPlate, setModalPlate, setCartDefinitive, setCartTemporary} = useContext(OrderContext);
	
	const handleEdit = (cartProduct: PlateSelected, i: number) => () => {

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

	const handleConfirmRequest = () => {

		//agrego a la base de datos cada uno de los items pedidos y cantidad y a que PeopleTableId corresponde
		cartTemporary.map((e) => (
			itemPeopleInTable(uuidv4().replaceAll('/', 'a'), JSON.parse(localStorage.getItem('idPeopleTableId') as any), e.quantity, e.ItemID)
		))

		//seteo como cart Definitivo, el cartTemporary + lo que esta de antes como definitivo, la misma información la guardo en el localstorage
		setCartDefinitive([
			...cartTemporary, ...JSON.parse(localStorage.getItem('cartDefinitive') as any)
		])
		localStorage.setItem('cartDefinitive', JSON.stringify([
			...cartTemporary,
			...JSON.parse(localStorage.getItem('cartDefinitive') as any)
		]))


		//seteo el carrito temporario como vacio, y guardo lo mismo en el local storage
		setCartTemporary([])
		localStorage.setItem('cartTemporary', JSON.stringify([]))


		setModalPlate({
			...modalPlate,
			stateModal: true,
			modalEditOrDeleteOrConfirm: 'confirm',
			modalType: 'required',
		});

	}

	return (
		<div className={styles.container}>
			<h3 className={styles.titleOrderUnconfirmed}>Tu Pedido</h3>
			{cartTemporary.map((cartProduct,i) => (
					<div key={i} className={styles.containerCardOrder}>
						<div className={styles.containerDescription}>
							<h4 className={styles.title}>{cartProduct?.title}</h4>
							<small className={styles.quantity} >Cantidad: {cartProduct?.quantity}</small>
						</div>
						<div className={styles.editDelete}>
							<FaEdit onClick={handleEdit(cartProduct, i)} className={styles.edit} />
							<FaTrashAlt onClick={handleDelete(cartProduct, i)} className={styles.delete} />
						</div>
					</div>
			))}
					<button className={styles.confirm} onClick={handleConfirmRequest}>Confirmar Pedido</button>
		</div>
	);
};
