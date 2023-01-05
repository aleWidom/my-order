import { Link, useLocation } from 'react-router-dom';
import { FaKey } from 'react-icons/fa';
import { MainBrand, Table } from '../../atoms';
import Requireds from '../../molecules/section/Requireds';

import styles from './Navbar.module.scss';

export const Navbar = () => {
	const { pathname } = useLocation();

	return (
		<nav className={pathname === '/' ? styles.containerNavbarHome : styles.containerNavbar}>
			<div className={styles.containerMenuBrand}>
				<MainBrand />
			</div>
			<div className={styles.containerTableWaiter}>
				<Link to={`/admin`}>
					<FaKey className={styles.key} />
				</Link>
				<Table />
				{pathname === '/' && <Requireds />}
			</div>
		</nav>
	);
};
