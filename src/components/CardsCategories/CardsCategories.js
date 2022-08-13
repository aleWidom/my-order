
import { useContext } from 'react';
import { OrderContext } from '../../context/order';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CardCategorie from "../CardCategories/CardCategorie";
import styles from "./CardsCategories.module.css"

const CardsCategories = () => {

  const { nameCategorySelected, setNameCategorySelected, categoriesMenuRestaurant } = useContext(OrderContext)

  const handleClickCategory = (cardSelected) => () => {
    setNameCategorySelected(cardSelected.name)

  }

  return (
    <>
      <div className={styles.header}>
        <Swiper spaceBetween={50}
          slidesPerView={3}>
          {categoriesMenuRestaurant.map((e) => (
            <SwiperSlide key={e.id}>
              {e.name === nameCategorySelected ?
                <CardCategorie source={e.photo} handleClick={handleClickCategory(e)} description={e.name} alternativo={e.name} clases={styles.selected} /> :
                <CardCategorie source={e.photo} handleClick={handleClickCategory(e)} description={e.name} alternativo={e.name} clases={styles.notSelected} />
              }
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
};

export default CardsCategories;
