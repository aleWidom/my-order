
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CardCategorie from "../CardCategories/CardCategorie";
import styles from "./CardsCategories.module.css"


const CardsCategories = ({categories, handleClickCategory, category }) => {

  return (
    <>
      <div className={styles.header}>
        <Swiper spaceBetween={50}
          slidesPerView={3}>
          {categories.map((e) => (
            <SwiperSlide key={e.id}>
              {e.name === category ?
                <CardCategorie source={e.photo} handleClick={handleClickCategory(e)} description={/* e.name */ e.nameCategories} alt={/* e.name */ e.nameCategories} clases={styles.selected} /> :
                <CardCategorie source={e.photo} handleClick={handleClickCategory(e)} description={/* e.name */ e.nameCategories} alt={/* e.name */ e.nameCategories} clases={styles.notSelected} />
              }
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
};

export default CardsCategories;
