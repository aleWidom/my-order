import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MainLoading } from '../../components/molecules';
import {AdminContext, OrderContext } from '../../context/';
import { fetchOrderItem, fetchTablesActiveCall, makeDelivered, makePreparing } from '../../services';
import styles from './AdminPage.module.scss';
import { PlateSelected } from '../../interfaces/interfaces';

const AdminPage = () => {
	const { loadingOrder, setLoadingOrder } = useContext(OrderContext);

	const { tablesCallRestaurant, setTablesCallRestaurant, orderItem,setOrderItem } = useContext(AdminContext);

	useEffect(() => {
		setTimeout(() => {
			setLoadingOrder(false);
			fetchTablesActiveCall()
				.then((data) => {
					return setTablesCallRestaurant(data);
				})
				.catch((e) => {
					console.log(e);
				});
			fetchOrderItem().then((data) => {
				return setOrderItem(data);
			})
			.catch((e) => {
				console.log(e);
			});	
		}, 2000);
	}, [setLoadingOrder, setTablesCallRestaurant, setOrderItem]);

	useEffect(() => {
		setInterval(() => {
			fetchTablesActiveCall()
				.then((data) => {
					return setTablesCallRestaurant(data);
				})
				.catch((e) => {
					console.log(e);
				});

				fetchOrderItem().then((data) => {
					return setOrderItem(data);
				})
				.catch((e) => {
					console.log(e);
				});
		}, 10000);
	}, [setTablesCallRestaurant, setLoadingOrder, setOrderItem]);


	
	const handleClickPreparing = (orderProduct: PlateSelected) => () => {
/* 		makePreparing(orderProduct.ItemPeopleInTableID) */

		fetchOrderItem()
		.then((data) => {
			return setOrderItem(data);
		})
		.catch((err) => {
			console.log(err);
		});
	}

	const handleClickDelivered = (orderProduct: PlateSelected) => () => {
		
	/* 	makeDelivered(orderProduct.ItemPeopleInTableID) */
		
		
		fetchOrderItem()
		.then((data) => {
			return setOrderItem(data);
		})
		.catch((err) => {
			console.log(err);
		});
	}


	return (
		<>
			{loadingOrder ? (
				<div className={styles.mainContainerLoading}>
					<MainLoading />
				</div>
			) : (
				<>
				<div className={styles.container}>
					<h1 className={styles.header}>Calls</h1>
					{tablesCallRestaurant.length > 0 ? 
					tablesCallRestaurant.map((e) => (
						<div key={e.table_number} className={styles.containerTable}>
							<h4 className={styles.numberTable}>Mesa: {e.table_number}</h4>
							<Link to={`/admin/${e.table_number}`} className={styles.link}>
								Detalle mesa
							</Link>
						</div>
					)):
					'No hay llamadas de ninguna mesa en este momento.'}
				</div>
				<div className={styles.container}>
					<h1 className={styles.header}>Orders</h1>
					{orderItem.length > 0 ? 
					orderItem.map((e) => (
						<>
					{/* 
					 */}
						</>
					)):
					'No hay ordenes pendientes de ninguna mesa en este momento.'}
				</div>
				</>
			)}
		</>
	);
};

export default AdminPage;
