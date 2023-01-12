import { FC, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaRegCheckCircle, FaTrashAlt } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { OrderContext, TableContext } from '../../../../context';
import { ordersCreate, ordersItem } from '../../../../services/tables';
import { Closed } from '../../../atoms';
import styles from './ModalPlate.module.scss';

interface Props {
	buttonName: string;
}

export const ModalPlate: FC<Props> = ({ buttonName }) => {
	const { modalPlate, setModalPlate, setModalPlateRequired, cart, setCart } = useContext(OrderContext);

	const { table } = useContext(TableContext);

	const { pathname } = useLocation();

	const page = pathname.slice(-5);

	const closedModalPlate = () => {
		setModalPlate({
			id: '0',
			state: false,
			title: '',
			price: '0',
			description: '',
			quantity: 1,
			photo: '',
			section: '',
		});
	};

	const handleClickRequest = () => {

		const id = uuidv4()

		console.log(id)

		setCart([
			...cart,
			{
				ItemID: `${modalPlate.id}`,
				title: modalPlate.title,
				price: modalPlate.price,
				quantity: modalPlate.quantity,
				photo: modalPlate.photo,
				description: modalPlate.description,
			},
		]);
		ordersItem(id, `${modalPlate.id}` , modalPlate.quantity, 'preparing')
		setModalPlateRequired({
			id: modalPlate.id,
			title: modalPlate.title,
			quantity: modalPlate.quantity,
			state: true,
			section: 'request',
		});
		setModalPlate({
			id: '0',
			state: false,
			title: '',
			price: '0',
			description: '',
			quantity: 1,
			photo: '',
			section: 'request',
		});
		ordersCreate(id, new Date().toLocaleString(), table.table_number);
	};

	const handleEdit = () => {
		const newCart = cart.map((e) => {
			if (modalPlate.id === e.ItemID) {
				e.quantity = modalPlate.quantity;
			}
			return e;
		});

		setCart(newCart);

		setModalPlate({
			id: '0',
			state: false,
			title: '',
			price: '0',
			description: '',
			quantity: 1,
			photo: '',
			section: '',
		});

		setModalPlateRequired({
			id: modalPlate.id,
			title: modalPlate.title,
			quantity: modalPlate.quantity,
			state: true,
			section: 'edit',
		});
	};

	const handleDelete = () => {
		const newCart = cart.filter((e) => {
			return e.ItemID !== modalPlate.id;
		});

		setCart(newCart);

		setModalPlate({
			id: '0',
			state: false,
			title: '',
			price: '0',
			description: '',
			quantity: 1,
			photo: '',
			section: '',
		});

		setModalPlateRequired({
			id: modalPlate.id,
			title: modalPlate.title,
			quantity: modalPlate.quantity,
			state: true,
			section: 'delete',
		});
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
					{page === '/' || modalPlate.section === 'edit' ? (
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
							<button onClick={addQuantity} className={styles.buttonQuantityAdd}>
								<p>
									<small className={styles.signAdd}>+</small>
								</p>
							</button>
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
