import { Swiper, SwiperSlide } from "swiper/react";
import { MainFood } from "../../../molecules";
import styles from "./MainFoods.module.css";

export const MainFoods = ({ cardsDayPlates }) => {
  return (
    <div>
      <h3 className={styles.title}>Platos del día</h3>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        className={styles.cardsPlates}
      >
        {cardsDayPlates.map((e) => (
          <SwiperSlide key={e.id}>
            <MainFood key={e.id} source={e.photo} title={e.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
