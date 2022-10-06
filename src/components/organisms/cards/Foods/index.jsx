import { useContext } from "react";
import { OrderContext } from "../../../../context";
import { Food } from "../../../molecules";

export const Foods = () => {
    
    const { platesSelectedCategoryRestaurant} = useContext(OrderContext)

    return (

        <>
            {platesSelectedCategoryRestaurant.map((e) => {
                return <Food header={e.title} source={e.photo} description={e.description} price={e.price} key={e.id} />
            })}
        </>

    )
};


