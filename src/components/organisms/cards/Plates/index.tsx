import { useContext } from 'react';
import { SearchContext} from '../../../../context';
import { Plate } from '../../../molecules';
import styles from './Plates.module.scss';

export const Plates = () => {
	
	const { results, categorySelected } = useContext(SearchContext);

	return (
		<>
				<div className={styles.container}>
					{categorySelected.name !== '' && <div className={styles.containerImgCategory} style={{ backgroundImage: `url(${categorySelected?.photo})` }}><h2 className={styles.title}>{categorySelected?.name}</h2></div>}
					{results.map((e) => {
						return <Plate header={e.title} description={e.description} price={e.price} key={e.ItemID} />;
					})}
				</div>
		</>
	);
};
