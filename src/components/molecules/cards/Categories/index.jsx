
import { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SearchContext, OrderContext } from '../../../../context';
import {useFetchCategories} from '../../../../hooks'
import 'swiper/css';
import { Categorie } from '../../../atoms';
import styles from "./Categories.module.css" 

export const Categories = () => {

  const { nameCategorySelected, categoriesMenuRestaurant, setNameCategorySelected, setCategoriesMenuRestaurant } = useContext(OrderContext)

  const {setResultsSearched} = useContext(SearchContext)

  const handleClickCategory = (cardSelected) => () => {
    setNameCategorySelected(cardSelected.name)
    setResultsSearched([])
  }

  useFetchCategories(setCategoriesMenuRestaurant)

  return (
    <>
      <div className={styles.containerCategories}>
        <Swiper spaceBetween={50}
          slidesPerView={3}>
          {categoriesMenuRestaurant.map((e) => (
            <SwiperSlide key={e.id}>
              {e.name === nameCategorySelected ?
                  <Categorie handleClick={handleClickCategory(e)} description={e.name} state={'selected'} />
                :
                  <Categorie handleClick={handleClickCategory(e)} description={e.name} state={'notSelected'} />
              }
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
};


