
import { useState } from 'react';
import { OrderContext } from '.';

export const OrderProvider = ({ children }) => {

    const [nameCategorySelected, setNameCategorySelected] = useState("Pizzanesas")

    const [categoriesMenuRestaurant, setCategoriesMenuRestaurant] = useState([]);

    const [platesSelectedCategoryRestaurant, setPlatesSelectedCategoryRestaurant] = useState([])

    const [cardsHome, setCardsHome] = useState({
            specials: [],
            ranking:[],
            dayPlates:[]
        })

    return (
        <OrderContext.Provider value={{
            nameCategorySelected,
            setNameCategorySelected,
            categoriesMenuRestaurant,
            setCategoriesMenuRestaurant,
            platesSelectedCategoryRestaurant,
            setPlatesSelectedCategoryRestaurant,
            cardsHome,
            setCardsHome
        }}>
            {children}
        </OrderContext.Provider>
    )
}



