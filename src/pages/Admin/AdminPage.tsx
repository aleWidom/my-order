import { useLocation } from 'react-router-dom';
import { updateTableNumberDesactive } from '../../services';

const AdminPage = () => {
	const { pathname } = useLocation();

	const numberTable = pathname.slice(-3);

	const handleDesactivate = () => {
		updateTableNumberDesactive(numberTable);
	};

	return (
		<>
			<h1>Admin</h1>
			<h2>Desactivar Mesa: {numberTable}</h2>
			<button onClick={handleDesactivate}>Desactivar mesa</button>
		</>
	);
};

export default AdminPage;
