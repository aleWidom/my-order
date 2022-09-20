import { useContext } from "react";
import { OrderContext } from "../../context/order";
import { useFetchPlates } from '../../hooks'
import CardMenu from "../CardMenu/CardMenu"

const CardsMenu = () => {

    const { platesSelectedCategoryRestaurant, nameCategorySelected, setPlatesSelectedCategoryRestaurant } = useContext(OrderContext)

    useFetchPlates(nameCategorySelected, setPlatesSelectedCategoryRestaurant)

    console.log(platesSelectedCategoryRestaurant)

    return (

        <>
            {platesSelectedCategoryRestaurant.map((e) => {
                return <CardMenu header={e.title} source={e.photo} description={e.description} price={e.price} key={e.id} />
            })}
        </>

    )
};

export default CardsMenu;
