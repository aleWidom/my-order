import { Link, useLocation } from 'react-router-dom';
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
				<Link to={`/admin}`}></Link>
				<Table />
				{pathname === '/' && <Requireds />}
			</div>
		</nav>
	);
};
