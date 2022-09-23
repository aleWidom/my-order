import { useContext } from "react";
import { OrderContext } from "../../context/order"
import CardMenu from "../CardMenu/CardMenu"

const CardsMenu = () => {

    const { platesSelectedCategoryRestaurant} = useContext(OrderContext)

    return (

        <>
            {platesSelectedCategoryRestaurant.map((e) => {
                return <CardMenu header={e.title} source={e.photo} description={e.description} price={e.price} key={e.id} />
            })}
        </>

    )
};

export default CardsMenu;
