
import { useState } from 'react';
import { OrderContext } from '.';

export const OrderProvider = ({ children }) => {

    const [nameCategorySelected, setNameCategorySelected] = useState("Pizzanesas")

    const [categoriesMenuRestaurant, setCategoriesMenuRestaurant] = useState([]);

    const [platesSelectedCategoryRestaurant, setPlatesSelectedCategoryRestaurant] = useState([])

    const [cardsHome, setCardsHome] = useState([])

    const [ menuWaiterActive, setMenuWaiterActive] = useState(false)

    return (
        <OrderContext.Provider value={{
            nameCategorySelected,
            setNameCategorySelected,
            categoriesMenuRestaurant,
            setCategoriesMenuRestaurant,
            platesSelectedCategoryRestaurant,
            setPlatesSelectedCategoryRestaurant,
            cardsHome,
            setCardsHome,
            menuWaiterActive,
            setMenuWaiterActive
        }}>
            {children}
        </OrderContext.Provider>
    )
}



