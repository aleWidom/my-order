import { useContext } from 'react';
import { SearchContext, OrderContext } from '../../../../context';
import {  Plate } from '../../../molecules';
import styles from './Plates.module.scss';

export const Plates = () => {
	const { results, nameCategorySelected } = useContext(SearchContext);
	const { categoriesMenuRestaurant } = useContext(OrderContext);


	const imgCategory = categoriesMenuRestaurant.find((e) => {
		return e.name === nameCategorySelected
	})


	return (
				<div className={styles.container}>
					<div className={styles.containerImgCategory} style={{ backgroundImage: `url(${imgCategory?.photo})` }}><h2 className={styles.title}>{imgCategory?.name}</h2></div>
					{results.map((e) => {
						return <Plate id={e.id} header={e.title} source={e.photo} description={e.description} price={e.price} key={e.id} />;
					})}
				</div>
	);
};
