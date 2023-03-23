import { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SearchContext, OrderContext } from '../../../../context';
import 'swiper/css';
import { Categorie } from '../../../atoms';
import { CategoryRestaurant } from '../../../../interfaces';
import styles from './Categories.module.scss';

export const Categories = () => {
	const { categoriesMenuRestaurant, itemsRestaurant } = useContext(OrderContext);

	const { categorySelected, setValueInput, setCategorySelected, setResults } = useContext(SearchContext);

	const handleClickCategory = (cardSelected: CategoryRestaurant) => () => {
		const resultsCategory = itemsRestaurant.filter((item)=> {
			return item.id_category === cardSelected.CategoryID
		})
				setCategorySelected(cardSelected);
				setResults(resultsCategory);
				setValueInput('');
	};



	return (
		<>
			<div className={styles.containerCategories}>
				<Swiper spaceBetween={50} slidesPerView={3}>
					{categoriesMenuRestaurant.length ?
						categoriesMenuRestaurant.map((e) => (
							<SwiperSlide key={e.CategoryID}>
								{e.name === categorySelected.name ? (
									<Categorie handleClick={handleClickCategory(e)} description={e.name} state={'selected'} />
								) : (
									<Categorie handleClick={handleClickCategory(e)} description={e.name} state={'notSelected'} />
								)}
							</SwiperSlide>
						)): ''}
				</Swiper>
			</div>
		</>
	);
};
