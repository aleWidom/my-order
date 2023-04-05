import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MainLoading } from '../../components/molecules';
import { AdminContext, OrderContext } from '../../context/';
import { fetchOrderItem, fetchTablesActiveCall, makeDelivered } from '../../services';
import styles from './AdminPage.module.scss';
import { PlateSelected } from '../../interfaces/interfaces';

const AdminPage = () => {
	const { loadingOrder, setLoadingOrder } = useContext(OrderContext);

	const { tablesCallRestaurant, setTablesCallRestaurant, orderItem, setOrderItem } = useContext(AdminContext);


	//la primera vez ejecuto este codigo
	useEffect(() => {
		//seteo el loading en false   
		setLoadingOrder(false)
		//Busco las mesas activas
		fetchTablesActiveCall()
			.then((data) => {
				setTablesCallRestaurant(data);
			})
			.catch((e) => {
				console.log(e);
			});

		//Busco todas las ordenes que no esten entregadas	
		fetchOrderItem().then((data) => {
			setOrderItem(data);
		})
			.catch((e) => {
				console.log(e);
			});
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])


	//cada 30 segundos ejecuto este codigo
	setTimeout(() => {
		//Busco las mesas activas
		fetchTablesActiveCall()
			.then((data) => {
				setTablesCallRestaurant(data);
			})
			.catch((e) => {
				console.log(e);
			});

		//Busco todas las ordenes que no esten entregadas	
		fetchOrderItem().then((data) => {
			setOrderItem(data);
		})
			.catch((e) => {
				console.log(e);
			});
	}, 30000);


	const handleClickDelivered = (orderProduct: PlateSelected) => () => {

		//seteo producto como entregado
		makeDelivered(orderProduct.ItemID)

		//vuelvo a buscar las ordenes que están pedidas pero no entregadas
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
							)) :
							'No hay llamadas de ninguna mesa en este momento.'}
					</div>
					<div className={styles.container}>
						<h1 className={styles.header}>Orders</h1>
						{orderItem.length > 0 ?
							orderItem.map((e) => (
								<div key={e.ItemID} className={styles.containerOrder}>
									<h4 className={styles.title}>{e.title}</h4>
									<h4 className={styles.description}>Cantidad: {e.quantity}</h4>
									<h4 className={styles.table}>Table: {e.id_table}</h4>
									<button onClick={handleClickDelivered(e)}>Marcar como entregado.</button>
								</div>
							)) :
							'No hay ordenes pendientes de ninguna mesa en este momento.'}
					</div>
				</>
			)}
		</>
	);
};

export default AdminPage;
