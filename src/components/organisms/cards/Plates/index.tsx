import { useContext } from 'react';
import { SearchContext } from '../../../../context';
import { Plate } from '../../../molecules';
import styles from './Plates.module.scss';

export const Plates = () => {
	const { results } = useContext(SearchContext);

	return (
		<div className={styles.container}>
			{results.map((e) => {
				return <Plate id={e.id} header={e.title} source={e.photo} description={e.description} price={e.price} key={e.id} />;
			})}
		</div>
	);
};
