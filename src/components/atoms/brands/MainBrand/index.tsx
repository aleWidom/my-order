import { useContext } from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { useLocation, Link, useSearchParams } from 'react-router-dom';
import { SearchContext } from '../../../../context';
import brand from '../../../../images/brand.jpg';
import styles from './MainBrand.module.scss';

export const MainBrand = () => {

	const { setResults } = useContext(SearchContext);

	const [params] = useSearchParams();

	const handleClickMenu = () => {
		setResults([]);
	};

	const { pathname } = useLocation();

	const page = pathname.slice(1,6);


	return (
		<Link to={localStorage.getItem('table') ? `/?table=${JSON.parse(localStorage.getItem('table') as any)}` : `/?table=${params.get('table')}`} className={styles.containerMainBrand} onClick={handleClickMenu}>
			{page !== 'order' ? (
				<img src={brand} alt={'brand'} className={styles.mainBrand} />
			) : (
				<div className={styles.iconOrder}>
					<FaAngleLeft />
				</div>
			)}
		</Link>
	);
};
