import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { OrderContext } from "../../context/order";
import CardHome from "../CardHome/CardHome"
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './CardsHome.module.css'


const CardsHome = ({title}) => {

    const { cart, setCart, categorySelected, platesSelectedCategoryRestaurant } = useContext(OrderContext)

    const handleClickSelected = (item) => () => {
        alert('Producto solicitado')
        const itemAdd = {
            ...item,
            quantity: 1
        }
        setCart([...cart, itemAdd])
    }

    console.log(platesSelectedCategoryRestaurant)

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{/* {categorySelected} */}{title}</h3>
            <Swiper slidesPerView={2} spaceBetween={20} className={styles.cardsPlates}>
                {platesSelectedCategoryRestaurant.map((e) => (
                    <SwiperSlide key={e.id}>
                        <CardHome key={e.id} price={`$${e.price}`} header={e.title} description={e.description} source={e.photo}>
                            {/*               <button className={styles.notAgreggate} onClick={handleClickSelected(e)}>Solicitar</button> */}
                        </CardHome>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
};




export default CardsHome;
