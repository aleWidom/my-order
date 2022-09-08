import { useContext } from "react";
import { OrderContext } from "../../context/order";
import { useFetchPlates } from "../../hooks";
import CardHome from "../CardHome/CardHome"
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './CardsHome.module.css'


const CardsHome = ({title}) => {

    const {platesSelectedCategoryRestaurant, nameCategorySelected, setPlatesSelectedCategoryRestaurant } = useContext(OrderContext)

    useFetchPlates(nameCategorySelected, setPlatesSelectedCategoryRestaurant)

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{/* {categorySelected} */}{title}</h3>
            <Swiper slidesPerView={2} spaceBetween={20} className={styles.cardsPlates}>
                {platesSelectedCategoryRestaurant.map((e) => (
                    <SwiperSlide key={e.id}>
                        <CardHome key={e.id} source={e.photo}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
};




export default CardsHome;
