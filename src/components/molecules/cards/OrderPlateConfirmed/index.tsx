import { useContext } from 'react';

import { OrderContext } from '../../../../context/order/OrderContext';
import styles from './OrderPlateConfirmed.module.scss';
import { fetchItemPeopleInTable } from '../../../../services';


export const OrderPlateConfirmed = () => {

	const { cartDefinitive} = useContext(OrderContext);

	/* 	setInterval(() => { 
			if(cartDefinitive.length) {
				fetchItemPeopleInTable(JSON.parse(localStorage.getItem('idPeopleTableId') as any))
				   .then((data) => {
					   setCartDefinitive(data);
					   localStorage.setItem('cartDefinitive', JSON.stringify(data))
				   })
				   .catch((err) => {
					   console.log(err);
				   });
			}
	   }, 10000);  */




	return (
		<div className={styles.container}>
			<h3 className={styles.titleOrderConfirmed}>Ordenes Anteriores</h3>
			{cartDefinitive.map((cartProduct, i) => (
				<div key={i} className={styles.containerCardOrderDefinitive}>
					<div className={styles.containerDescription}>
						<h4 className={styles.title}>{cartProduct.title}</h4>
						<small className={styles.quantity}>Cantidad: {cartProduct.quantity}</small>
						{cartProduct.state === 'delivered' ? (
							<small className={styles.delivered}>Entregado</small>
						) : (
							<small className={styles.process}>Su pedido se esta preparando.</small>
						)}
					</div>
				</div>
			))}
		</div>
	);
};
