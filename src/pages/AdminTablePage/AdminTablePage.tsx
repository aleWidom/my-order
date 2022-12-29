import { useLocation } from 'react-router-dom';
import { updateTableNumberDesactive } from '../../services';

const AdminTablePage = () => {
	const { pathname } = useLocation();

	const numberTable = pathname.slice(-3);

	const handleDesactivate = () => {
		updateTableNumberDesactive(numberTable);
	};

	return (
		<>
			<h1>Admin Table </h1>
			<h2>Desactivar Mesa: </h2>
			<button onClick={handleDesactivate}>Desactivar mesa {numberTable}</button>
		</>
	);
};

export default AdminTablePage;
