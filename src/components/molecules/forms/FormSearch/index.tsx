import { InputSearch, Search } from '../../../atoms';
import styles from './FormSearch.module.scss';

export const FormSearch = () => {
	return (
		<div className={styles.container}>
			<form className={styles.containerFormSearch}>
				<InputSearch />
				<Search />
			</form>
		</div>
	);
};
