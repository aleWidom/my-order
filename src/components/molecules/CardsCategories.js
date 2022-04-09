
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CardCategorie from "./CardCategorie";
import styles from "./CardsCategories.module.css"


const CardsCategories = ({ cardsHeaderMenu, handleClickCategory, category }) => {

  return (
    <>
      <div className={styles.header}>
        <Swiper spaceBetween={50}
          slidesPerView={3}>
          {cardsHeaderMenu.map((e) => (
            <SwiperSlide key={e.id}>
              {e.name === category ?
                <CardCategorie source={e.photo} handleClick={handleClickCategory(e)} description={e.name} alt={e.name} clases={styles.selected} /> :
                <CardCategorie source={e.photo} handleClick={handleClickCategory(e)} description={e.name} alt={e.name} clases={styles.notSelected} />
              }
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
};

export default CardsCategories;
