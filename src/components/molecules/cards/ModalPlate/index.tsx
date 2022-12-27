import { FC, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { OrderContext } from '../../../../context';
import { Closed } from '../../../atoms';
import styles from './ModalPlate.module.scss';

interface Props {
	buttonName: string;
}

export const ModalPlate: FC<Props> = ({ buttonName }) => {
	const { modalPlate, setModalPlate, setModalPlateRequired, cart, setCart } = useContext(OrderContext);

	const { pathname } = useLocation();

	const page = pathname.slice(-5);

	const closedModalPlate = () => {
		setModalPlate({
			id: 0,
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
		setCart([
			...cart,
			{
				id: modalPlate.id,
				title: modalPlate.title,
				price: modalPlate.price,
				quantity: modalPlate.quantity,
				photo: modalPlate.photo,
				description: modalPlate.description,
			},
		]);
		setModalPlateRequired({
			id: modalPlate.id,
			title: modalPlate.title,
			quantity: modalPlate.quantity,
			state: true,
			section: 'request',
		});
		setModalPlate({
			id: 0,
			state: false,
			title: '',
			price: '0',
			description: '',
			quantity: 1,
			photo: '',
			section: 'request',
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
			id: 0,
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
			return e.id !== modalPlate.id;
		});

		console.log('delete');

		setCart(newCart);

		setModalPlate({
			id: 0,
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
		<div className={styles.containerModalPlate}>
			<div className={styles.modalPlate}>
				<button onClick={closedModalPlate} className={styles.buttonClosedModal}>
					<Closed />
				</button>
				<h2 className={styles.title}>{modalPlate.title}</h2>
				<p className={styles.description}>{modalPlate.description}</p>
				<p className={styles.price}>${modalPlate.price}</p>
				<small className={styles.priceUnit}> (precio x unidad)</small>
				<div className={styles.containerQuantity}>
					<p className={styles.quantity}>Cantidad: {modalPlate.quantity}</p>
					{(page !== 'order' || modalPlate.section === 'edit') && (
						<>
							<button onClick={addQuantity} className={styles.buttonQuantity}>
								<p className={styles.sign}>+</p>
							</button>
							{modalPlate.quantity > 1 && (
								<button onClick={substractQuantity} className={styles.buttonQuantity}>
									<p className={styles.sign}>-</p>
								</button>
							)}
						</>
					)}
				</div>
				{page !== 'order' && (
					<button onClick={handleClickRequest} className={styles.request}>
						{buttonName}
					</button>
				)}
				{page === 'order' && buttonName === 'Editar' && (
					<button onClick={handleEdit} className={styles.request}>
						{buttonName}
					</button>
				)}
				{page === 'order' && buttonName === 'Eliminar' && (
					<button onClick={handleDelete} className={styles.request}>
						{buttonName}
					</button>
				)}
			</div>
		</div>
	);
};
