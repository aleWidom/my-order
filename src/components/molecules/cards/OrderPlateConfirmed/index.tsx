import { useContext, useEffect } from 'react';
import { OrderContext } from '../../../../context/order/OrderContext';
import styles from './OrderPlateConfirmed.module.scss';

export const OrderPlateConfirmed = () => {

	const {  cartDefinitive, setCartTemporary,} = useContext(OrderContext);

	const  numberTable = JSON.parse(localStorage.getItem('table') as any)

	/* 	useEffect(()=> {
						setCartDefinitive([
							...cartTemporary,
							...cartDefinitive
						])
						setCartTemporary([])
		},[]) */
/* 
	useEffect(() => {
		setInterval(() => { */
			/* fetchPeopleInTable(sittingOnTheTable.id).then((response) => {
				fetchItemPeopleInTable(response[0].PeopleInTableID)
					.then((data) => {
						setCart(data);
					})
					.catch((err) => {
						console.log(err);
					});
			}); */
/* 		}, 10000);
	}, [setCartTemporary,numberTable]); */

	return (
		<>
			{cartDefinitive.map((cartProduct, i) => (
				<div key={i} className={styles.containerCardOrderDefinitive}>
					<div className={styles.containerDescription}>
						<h4 className={styles.title}>{cartProduct.title}</h4>
						<small>Cantidad: {cartProduct.quantity}</small>
						{/* {cartProduct.state === 'delivered' ? (
							<small className={styles.state}>Entregado</small>
						) : (
							<small className={styles.state}>Su pedido se esta preparando.</small>
						)} */}
					</div>
				</div>
			))}
		</>
	);
};
