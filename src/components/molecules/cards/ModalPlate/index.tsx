import { FC, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaRegCheckCircle, FaTrashAlt } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { OrderContext, TableContext } from '../../../../context';
import { deleteItem, fetchItemPeopleInTable, updateQuantityItem, itemPeopleInTable, fetchPeopleInTable } from '../../../../services';
import { Closed } from '../../../atoms';
import styles from './ModalPlate.module.scss';

interface Props {
	buttonName: string;
}

export const ModalPlate: FC<Props> = ({ buttonName }) => {
	const { modalPlate, setModalPlate, cartTemporary, setCartTemporary } = useContext(OrderContext);

	const { sittingOnTheTable } = useContext(TableContext);

	const { pathname } = useLocation();

	const page = pathname.slice(-5);

	const closedModalPlate = () => {
		setModalPlate({
			title: '',
			description: '',
			price: '0',
			quantity: 1,
			stateModal: false,
		});
	};

	const handleClickRequest = () => {
		setCartTemporary([
			{
				title: modalPlate.title,
				quantity: modalPlate.quantity,
				price: modalPlate.price
			},
			...cartTemporary
		])
		/* fetchPeopleInTable(sittingOnTheTable.id)
			.then((data) => {
				console.log(data);
				itemPeopleInTable(uuidv4(), data[0].PeopleInTableID, modalPlate.quantity, `${modalPlate.ItemID}`);
			})
			.catch((err) => {
				console.log(err);
			}); */

		/* fetchPeopleInTable(sittingOnTheTable.id).then((response) => {
			fetchItemPeopleInTable(response[0].PeopleInTableID)
				.then((data) => {
					setCartTemporary(data);
				})
				.catch((err) => {
					console.log(err);
				});
		}); */

		setModalPlate({
			...modalPlate,
			modalType: 'required',
		});
	};

	const handleEdit = () => {
		/* 	updateQuantityItem(modalPlate.ItemPeopleInTableID, modalPlate.quantity); */

		const cartTemporaryEdit = cartTemporary.map((item,i)=> {
			if(i === modalPlate.index) {
				item.quantity = modalPlate.quantity
			}
			return item
		})

		setCartTemporary(cartTemporaryEdit)

		setModalPlate({
			...modalPlate,
			modalType: 'required',
			modalEditOrDelete: 'edit',
		});

	

		/* fetchPeopleInTable(sittingOnTheTable.id).then((response) => {
			fetchItemPeopleInTable(response[0].PeopleInTableID)
				.then((data) => {
					setCartTemporary(data);
				})
				.catch((err) => {
					console.log(err);
				});
		}); */
	};

	const handleDelete = () => {
		/* 		deleteItem(modalPlate.ItemPeopleInTableID); */

		const cartTemporaryDelete = cartTemporary.filter((item, index)=> {
			return index !== modalPlate.index
		})

		setCartTemporary(cartTemporaryDelete)

		setModalPlate({
			...modalPlate,
			modalType: 'required',
			modalEditOrDelete: 'delete',
		});

		/* fetchPeopleInTable(sittingOnTheTable.id).then((response) => {
			fetchItemPeopleInTable(response[0].PeopleInTableID)
				.then((data) => {
					setCartTemporary(data);
				})
				.catch((err) => {
					console.log(err);
				});
		}); */
	};

	const addQuantity = () => {
		setModalPlate({
			...modalPlate,
			quantity: modalPlate.quantity + 1,
		});
	};

	const substractQuantity = () => {
		setModalPlate({
			...modalPlate,
			quantity: modalPlate.quantity - 1,
		});
	};

	return (
		<>
			<div className={styles.containerModalPlate} onClick={closedModalPlate}></div>
			<div className={styles.modalPlate}>
				<button onClick={closedModalPlate} className={styles.buttonClosedModal}>
					<Closed />
				</button>
				<h2 className={styles.title}>{modalPlate.title}</h2>
				<p className={styles.description}>{modalPlate.description}</p>
				<p className={styles.price}>${modalPlate.price}</p>
				<small className={styles.priceUnit}> (precio x unidad)</small>
				<div className={styles.containerQuantity}>
					<p className={styles.quantity}>Cantidad: </p>
					{page === '/' || modalPlate.modalEditOrDelete === 'edit' ? (
						<div className={styles.containerQuantitySigns}>
							{modalPlate.quantity > 1 ? (
								<button onClick={substractQuantity} className={styles.buttonQuantitySubstract}>
									<p>
										<small className={styles.signSubstract}>-</small>
									</p>
								</button>
							) : (
								<button className={styles.buttonQuantitySubstract}>
									<p>
										<small className={styles.signSubstractInactive}>-</small>
									</p>
								</button>
							)}
							<p>{modalPlate.quantity}</p>
							{modalPlate.quantity > 0 && modalPlate.quantity < 9 ? (
								<button onClick={addQuantity} className={styles.buttonQuantityAdd}>
									<p>
										<small className={styles.signAdd}>+</small>
									</p>
								</button>
							) : (
								<button className={styles.buttonQuantityAdd}>
									<p>
										<small className={styles.signAddtInactive}>+</small>
									</p>
								</button>
							)}
						</div>
					) : (
						`${modalPlate.quantity} u.`
					)}
				</div>
				{page === '/' && (
					<button onClick={handleClickRequest} className={styles.request}>
						{buttonName}
						<FaRegCheckCircle />
					</button>
				)}
				{page !== '/' && buttonName === 'Editar' && (
					<button onClick={handleEdit} className={styles.request}>
						{buttonName}
						<FaRegCheckCircle />
					</button>
				)}
				{page !== '/' && buttonName === 'Eliminar' && (
					<button onClick={handleDelete} className={styles.requestTrash}>
						{buttonName}
						<FaTrashAlt />
					</button>
				)}
			</div>
		</>
	);
};
