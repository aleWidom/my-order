import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AdminContext } from '../../context/adm/AdminContext';
import { fetchTablesActiveCall } from '../../services';

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
		<>
			<h1>Calls</h1>
			{tablesCallRestaurant.map((e) => (
				<>
					<div key={e.table_number}>
						<h2>Mesa: {e.table_number}</h2>
					</div>
					<Link to={`/admin/${e.table_number}}`}></Link>
				</>
			))}

			{/* 	<h1>Ordenes</h1>
			{tablesCallRestaurant.map((e) => (
				<div key={e.table_number}>
					<h2>Mesa: {e.table_number}</h2>
				</div>
			))} */}
		</>
	);
};

export default AdminPage;
