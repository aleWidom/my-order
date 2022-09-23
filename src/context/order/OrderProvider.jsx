
import { useState } from 'react';
import { OrderContext } from '.';

export const OrderProvider = ({ children }) => {

    const [nameCategorySelected, setNameCategorySelected] = useState("")

    const [categoriesMenuRestaurant, setCategoriesMenuRestaurant] = useState([]);

    const [platesSelectedCategoryRestaurant, setPlatesSelectedCategoryRestaurant] = useState([])

    const [cardsRanking, setCardsRanking] = useState([])

    const [ cardsDayPlate,  setCardsDayPlate,] = useState([])

    const [menuWaiterActive, setMenuWaiterActive] = useState(false)

    return (
        <OrderContext.Provider value={{
            nameCategorySelected,
            setNameCategorySelected,
            categoriesMenuRestaurant,
            setCategoriesMenuRestaurant,
            platesSelectedCategoryRestaurant,
            setPlatesSelectedCategoryRestaurant,
            cardsRanking,
            setCardsRanking,
            cardsDayPlate, 
            setCardsDayPlate,
            menuWaiterActive,
            setMenuWaiterActive
        }}>
            {children}
        </OrderContext.Provider>
    )
}



