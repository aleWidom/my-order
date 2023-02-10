import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { SearchContext } from '../../context/search/SearchContext';
import { TableContext } from '../../context/tables/TableContext';
import { updateTableNumberDesactive } from '../../services';
import { ModalInfo } from '../../components/molecules';
import styles from './AdminTablePage.module.scss';

const AdminTablePage = () => {
	const { sittingOnTheTable } = useContext(TableContext);

	const { modalInfo, setModalInfo } = useContext(SearchContext);

	const { pathname } = useLocation();

	const numberTable = pathname.slice(-3);

	console.log(numberTable)

	const handleDesactivate = () => {
		updateTableNumberDesactive(numberTable);
		setModalInfo({
			state: true,
			description: `La mesa ${sittingOnTheTable.id} ha sido desactivada`,
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
