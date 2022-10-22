import { Swiper, SwiperSlide } from "swiper/react";
import { MainPlate } from "../../../molecules";
import styles from "./MainPlates.module.css";

export const MainPlates = ({ cardsDayPlates, cardsRankingPlates }) => {
  
  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.title}>Platos del día</h3>
        <Swiper
          slidesPerView={2.5}
          spaceBetween={20}
          className={styles.cardsPlates}
        >
          {cardsDayPlates.map((e) => (
            <SwiperSlide key={e.id} >
              <MainPlate key={e.id} source={e.photo} header={e.title} price={e.price} description={e.description} id={e.id}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.container}>
        <h3 className={styles.title}>Platos más solicitados</h3>
        <Swiper
           slidesPerView={2.5}
           spaceBetween={20}
          className={styles.cardsPlates}
        >
          {cardsRankingPlates.map((e) => (
            <SwiperSlide key={e.id} >
              <MainPlate key={e.id} source={e.photo} header={e.title} price={e.price} description={e.description} id={e.id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
