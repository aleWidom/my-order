import { Link, useLocation } from 'react-router-dom';
import { updateTableNumberDesactive } from '../../services';
import styles from './AdminTablePage.module.scss';

const AdminTablePage = () => {
	const { pathname } = useLocation();

	const numberTable = pathname.slice(-3);

	const handleDesactivate = () => {
		updateTableNumberDesactive(numberTable);
	};

	return (
		<div className={styles.container}>
			<div className={styles.containerHeader}>
				<h1 className={styles.header}>Admin Table </h1>
				<Link to={`/admin`} className={styles.link}>
					Ir a admin
				</Link>
			</div>
			<button onClick={handleDesactivate} className={styles.buttonTableDesactivate}>
				Desactivar mesa {numberTable}
			</button>
		</div>
	);
};

export default AdminTablePage;
