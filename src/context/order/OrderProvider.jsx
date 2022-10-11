
import { useState } from 'react';
import { OrderContext } from '.';

export const OrderProvider = ({ children }) => {



    const [categoriesMenuRestaurant, setCategoriesMenuRestaurant] = useState([]);

    const [cardsRankingPlates, setCardsRankingPlates] = useState([])

    const [cardsDayPlates, setCardsDayPlates,] = useState([])

    const [menuWaiterActive, setMenuWaiterActive] = useState(false)

    const [modalRequestFood, setModalRequestFood] = useState({
        state: false,
        title: ""
    })

    return (
        <OrderContext.Provider value={{
            categoriesMenuRestaurant,
            setCategoriesMenuRestaurant,
            cardsRankingPlates,
            setCardsRankingPlates,
            cardsDayPlates,
            setCardsDayPlates,
            menuWaiterActive,
            setMenuWaiterActive,
            modalRequestFood,
            setModalRequestFood
        }}>
            {children}
        </OrderContext.Provider>
    )
}



