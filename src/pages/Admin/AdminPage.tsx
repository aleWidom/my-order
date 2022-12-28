import { updateTableNumberDesactive } from '../../services';

const AdminPage = () => {
	const handleDesactivate = () => {
		updateTableNumberDesactive('003');
	};

	return (
		<>
			<h1>Admin</h1>
			<button onClick={handleDesactivate}>Desactivar mesa</button>
		</>
	);
};

export default AdminPage;
