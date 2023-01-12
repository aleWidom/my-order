import { useContext, useEffect } from 'react';
import { SearchContext, OrderContext } from '../../../../context';
import { MainLoading, Plate } from '../../../molecules';
import styles from './Plates.module.scss';

export const Plates = () => {
	const { results, categorySelected } = useContext(SearchContext);
	const { loadingPlates, setLoadingPlates } = useContext(OrderContext);


	useEffect(() => {
		setLoadingPlates(false)
	}, [setLoadingPlates, loadingPlates])

	return (
		<>
			{loadingPlates ?
				<div className={styles.mainContainerLoading}>
					<MainLoading />
				</div> :
				<div className={styles.container}>
					{categorySelected.name !== '' && <div className={styles.containerImgCategory} style={{ backgroundImage: `url(${categorySelected?.photo})` }}><h2 className={styles.title}>{categorySelected?.name}</h2></div>}
					{results.map((e) => {
						return <Plate id={e.ItemID} header={e.title} source={e.photo} description={e.description} price={e.price} key={e.ItemID} />;
					})}
				</div>}
		</>
	);
};
