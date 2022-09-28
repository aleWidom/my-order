
import CardHome from "../CardHome/CardHome"
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './CardsRanking.module.css'

const CardsRanking = ({ cardsRanking, title }) => { 
    return (
        <div >
            <h3 className={styles.title}>{title}</h3>
            <Swiper slidesPerView={2} spaceBetween={20} className={styles.cardsPlates}>
                {cardsRanking.map((e) => (
                    <SwiperSlide key={e.id}>
                        <CardHome key={e.id} source={e.photo}  title={e.title} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    )
};

export default CardsRanking ;







