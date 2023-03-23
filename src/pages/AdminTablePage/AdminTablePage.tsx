import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { SearchContext } from '../../context/search/SearchContext';
import { updateTableNumberDesactive } from '../../services';
import { ModalInfo } from '../../components/molecules';
import styles from './AdminTablePage.module.scss';

const AdminTablePage = () => {

	const numberTable = JSON.parse(localStorage.getItem('table') as any)

	const { modalInfo, setModalInfo } = useContext(SearchContext);

	const handleDesactivate = () => {
		updateTableNumberDesactive(numberTable);
		setModalInfo({
			state: true,
			description: `La mesa ${numberTable} ha sido desactivada`,
			section: 'admin',
		});
	};

	return (
		<>
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

			{modalInfo.section === 'admin' && <ModalInfo />}
		</>
	);
};

export default AdminTablePage;
