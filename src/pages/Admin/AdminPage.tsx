import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MainLoading } from '../../components/molecules';
import {AdminContext, OrderContext } from '../../context/';
import { fetchTablesActiveCall } from '../../services';
import styles from './AdminPage.module.scss';

const AdminPage = () => {
	const { loadingOrder, setLoadingOrder } = useContext(OrderContext);

	const { tablesCallRestaurant, setTablesCallRestaurant } = useContext(AdminContext);

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
		}, 2000);
	}, [setLoadingOrder, setTablesCallRestaurant]);

	useEffect(() => {
		setInterval(() => {
			fetchTablesActiveCall()
				.then((data) => {
					return setTablesCallRestaurant(data);
				})
				.catch((e) => {
					console.log(e);
				});
		}, 10000);
	}, [setTablesCallRestaurant, setLoadingOrder]);

	return (
		<>
			{loadingOrder ? (
				<div className={styles.mainContainerLoading}>
					<MainLoading />
				</div>
			) : (
				<div className={styles.container}>
					<h1 className={styles.header}>Calls</h1>
					{tablesCallRestaurant.map((e) => (
						<div key={e.table_number} className={styles.containerTable}>
							<h4 className={styles.numberTable}>Mesa: {e.table_number}</h4>
							<Link to={`/admin/${e.table_number}`} className={styles.link}>
								Detalle mesa
							</Link>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default AdminPage;
