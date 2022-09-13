
import {  useFetchCardsPlatesHome } from '../../hooks'
import CardHome from "../CardHome/CardHome"
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './CardsHome.module.css'
import { OrderContext } from '../../context/order';
import { useContext } from 'react';



const CardsHome = ({title}) => {
/* 
    const { setPlatesSelectedCategoryRestaurant} = useContext(OrderContext)

    useFetchCardsPlatesHome(title, setPlatesSelectedCategoryRestaurant) */

    const specials = [];
    const ranking = [];
    const dayPlates = []
   


    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{/* {categorySelected} */}{title}</h3>
            <Swiper slidesPerView={2} spaceBetween={20} className={styles.cardsPlates}>
               
               {/* TODO CONDICIONAL {specials.map((e) => (
                    <SwiperSlide key={e.id}>
                        <CardHome key={e.id} source={e.photo} description={e.photo}/>
                    </SwiperSlide>
                ))} */} 
            </Swiper>
        </div>
    )
};




export default CardsHome;
