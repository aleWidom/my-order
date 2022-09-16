
import CardHome from "../CardHome/CardHome"
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './CardsHome.module.css'

const CardsHome = ({ cardsHome }) => {

    console.log(cardsHome)

    return (
        <>
            {
                cardsHome.map((sectionHome) => (
                    <div className={styles.cardsHomeContainer} key={sectionHome.id}>
                        <h3 className={styles.title}>{sectionHome.title}</h3>
                        <Swiper slidesPerView={2} spaceBetween={20} className={styles.cardsPlates}>
                            {sectionHome.items.map((e) => (
                                <SwiperSlide key={e.id}>
                                    <CardHome key={e.id}/*  source={e.photo} */ description={e.name} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                ))
            }
        </>
    )
};


{/* <div className={styles.cardsMostPopular}>
<CardsHome title={'Platos más solicitados.'} sectionHone={cardsHome.specials} />
</div>
<div className={styles.suggestions}>
<CardsHome title={'Sugerencias del cheff.'} sectionHone={cardsHome.ranking} />
</div>
<div className={styles.daysPlates} >
<CardsHome title={'Platos del día.'} sectionHone={cardsHome.dayPlates} />
</div> */}



export default CardsHome;
