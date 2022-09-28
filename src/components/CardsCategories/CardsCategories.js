
import { useContext } from 'react';
import { OrderContext } from '../../context/order';
import { SearchContext } from '../../context/search';
import { useFetchCategories } from '../../hooks';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CardCategorie from "../CardCategories/CardCategorie";
import styles from "./CardsCategories.module.css" 

const CardsCategories = () => {

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
                  <CardCategorie handleClick={handleClickCategory(e)} description={e.name} state={'selected'} />
                :
                  <CardCategorie handleClick={handleClickCategory(e)} description={e.name} state={'notSelected'} />
              }
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
};

export default CardsCategories;
