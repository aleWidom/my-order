import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AdminContext } from '../../context/adm/AdminContext';
import { fetchTablesActiveCall } from '../../services';
import styles from './AdminPage.module.scss';

const AdminPage = () => {
	const { tablesCallRestaurant, setTablesCallRestaurant } = useContext(AdminContext);

	useEffect(() => {
		setInterval(() => {
			fetchTablesActiveCall()
				.then((data) => {
					return setTablesCallRestaurant(data);
				})
				.catch((e) => {
					console.log(e);
				});
		}, 20000);
	}, [setTablesCallRestaurant]);

	return (
		<div className={styles.container}>
			<h1 className={styles.header}>Calls</h1>
			{tablesCallRestaurant.map((e) => (
				<div key={e.table_number} className={styles.containerTable}>
					<h4>Mesa: {e.table_number}</h4>
					<Link to={`/admin/${e.table_number}`} className={styles.link}>
						Ir a mesa
					</Link>
				</div>
			))}

			{/* 	<h1>Ordenes</h1>
			{tablesCallRestaurant.map((e) => (
				<div key={e.table_number}>
					<h2>Mesa: {e.table_number}</h2>
				</div>
			))} */}
		</div>
	);
};

export default AdminPage;
