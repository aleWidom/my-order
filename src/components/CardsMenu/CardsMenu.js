import { useContext } from "react";
import { OrderContext } from "../../context/order";
import {useFetchPlates} from '../../hooks'
import CardMenu from "../CardMenu/CardMenu"
import styles from './CardsMenu.module.css'


const CardsMenu = ({ title }) => {

    const { platesSelectedCategoryRestaurant,  nameCategorySelected,  setPlatesSelectedCategoryRestaurant } = useContext(OrderContext)

    useFetchPlates(nameCategorySelected, setPlatesSelectedCategoryRestaurant)

    console.log(platesSelectedCategoryRestaurant)

    return (

        <>
            {platesSelectedCategoryRestaurant.map((e) => {
                return <div className={styles.containerCardsMenu}>
                    <CardMenu header={e.title} source={e.photo} description={e.description} price={e.price}/>
                </div>
            })}
        </>

    )
};

export default CardsMenu;
