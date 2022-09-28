
import CardHome from "../CardHome/CardHome"
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './CardsDayPlates.module.css'

const CardsDayPlates = ({ cardsDayPlates }) => { 
    return (
        <div >
            <h3 className={styles.title}>Platos del día</h3>
            <Swiper slidesPerView={2} spaceBetween={20} className={styles.cardsPlates}>
                {cardsDayPlates.map((e) => (
                    <SwiperSlide key={e.id}>
                        <CardHome key={e.id} source={e.photo}  title={e.title} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    )
};

export default CardsDayPlates ;





