
import CardHome from "../CardHome/CardHome" 
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './CardsHome.module.css'

const CardsHome = ({title, sectionHone}) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{/* {categorySelected} */}{title}</h3>
            <Swiper slidesPerView={2} spaceBetween={20} className={styles.cardsPlates}>
              {sectionHone.map((e) => (
                    <SwiperSlide key={e.id}>
                        <CardHome key={e.id} source={e.photo} description={e.name}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
};




export default CardsHome;
