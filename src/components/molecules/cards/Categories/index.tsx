import { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SearchContext, OrderContext } from '../../../../context';
import 'swiper/css';
import { Categorie } from '../../../atoms';
import { getItemsAccordingToSelectedCategory } from '../../../../services';
import { CategoryRestaurant, PlateRestaurant } from '../../../../interfaces';
import styles from './Categories.module.scss';

export const Categories = () => {
	const { categoriesMenuRestaurant, setLoadingPlates } = useContext(OrderContext);

	const { categorySelected, setValueInput, setCategorySelected, setResults } = useContext(SearchContext);

	const handleClickCategory = (cardSelected: CategoryRestaurant) => () => {
		getItemsAccordingToSelectedCategory(cardSelected.CategoryID)
			.then((data: PlateRestaurant[]) => {
				setCategorySelected(cardSelected);
				setLoadingPlates(true);
				setResults(data);
				setValueInput('');

			})
			.catch((err) => console.log(err));
	};



	return (
		<>
			<div className={styles.containerCategories}>
				<Swiper spaceBetween={50} slidesPerView={3}>
					{categoriesMenuRestaurant.length &&
						categoriesMenuRestaurant.map((e) => (
							<SwiperSlide key={e.CategoryID}>
								{e.name === categorySelected.name ? (
									<Categorie handleClick={handleClickCategory(e)} description={e.name} state={'selected'} />
								) : (
									<Categorie handleClick={handleClickCategory(e)} description={e.name} state={'notSelected'} />
								)}
							</SwiperSlide>
						))}
				</Swiper>
			</div>
		</>
	);
};
