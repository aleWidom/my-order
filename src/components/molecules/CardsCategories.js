
import { useEffect, useState } from "react";
import { getAllCategories } from "../../services/menu"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CardCategorie from "./CardCategorie";
import styles from "./CardsCategories.module.css"


const CardsCategories = ({ handleClick, category }) => {

  const [cardsHeaderMenu, setCardsHeaderMenu] = useState([]);

  useEffect(() => {
    getAllCategories()
      .then((data) => setCardsHeaderMenu(data))
      .catch((err) => console.log(err))
  }, []);


  return (
    <>
      <div className={styles.header}>
        <Swiper spaceBetween={50}
          slidesPerView={3}>
          {cardsHeaderMenu.map((e) => (
            <SwiperSlide key={e.id}>
              {e.name === category ?
                <CardCategorie source={e.photo} handleClick={handleClick(e)} description={e.name} alt={e.name} clases={styles.selected} /> :
                <CardCategorie source={e.photo} handleClick={handleClick(e)} description={e.name} alt={e.name} clases={styles.notSelected} />
              }
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
};

export default CardsCategories;
