import { FC, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaRegCheckCircle, FaTrashAlt } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { OrderContext} from '../../../../context';
import { itemPeopleInTable } from '../../../../services/tables';
import { Closed } from '../../../atoms';
import styles from './ModalPlate.module.scss';

interface Props {
	buttonName: string;
} 

export const ModalPlate : FC<Props>  = ({ buttonName }) => {
 	
	const { modalPlate, setModalPlate, cart, setCart } = useContext(OrderContext);

	const { pathname } = useLocation();

	const page = pathname.slice(-5);

	const closedModalPlate = () => {
		setModalPlate({
			id: '0',
			title: '',
			description: '',
			price: '0',
			quantity: 1,
			state: false
		});
	};

	const handleClickRequest = () => {

		const idPeopleInTable = uuidv4()	

		setCart([
			...cart,
			{
				id: `${modalPlate.id}`,
				title: modalPlate.title,
				price: modalPlate.price,
				quantity: modalPlate.quantity,
				description: modalPlate.description,
			},
		]);

		itemPeopleInTable(uuidv4(),idPeopleInTable,modalPlate.quantity,`${modalPlate.id}` )
		
		setModalPlate({
			...modalPlate,
			modalType: 'required'
		});
	};

	const handleEdit = () => {
		const newCart = cart.map((e) => {
			if (modalPlate.id === e.id) {
				e.quantity = modalPlate.quantity;
			}
			return e;
		});

		setCart(newCart);

		setModalPlate({
			...modalPlate,
			modalType: 'required',
			modalEditOrDelete: 'edit'
		});
	};

	const handleDelete = () => {
		const newCart = cart.filter((e) => {
			return e.id !== modalPlate.id;
		});

		setCart(newCart);

		setModalPlate({
			...modalPlate,
			modalType: 'required',
			modalEditOrDelete: 'delete',
		
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
					{page === '/' || modalPlate.modalEditOrDelete === 'edit'  ? (
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
