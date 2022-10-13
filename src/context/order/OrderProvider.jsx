
import { useState } from 'react';
import { OrderContext } from '.';

export const OrderProvider = ({ children }) => {



    const [categoriesMenuRestaurant, setCategoriesMenuRestaurant] = useState([]);

    const [cardsRankingPlates, setCardsRankingPlates] = useState([])

    const [cardsDayPlates, setCardsDayPlates,] = useState([])

    const [menuWaiterActive, setMenuWaiterActive] = useState(false)

    const [modalPlate, setModalPlate] = useState({
        state: false,
        title: "",
        price: 0,
        img: "",
        description: "",
    })

    const [modalRequest, setModalRequest] = useState({
        state: false
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
            modalPlate,
            setModalPlate,
            modalRequest, 
            setModalRequest
        }}>
            {children}
        </OrderContext.Provider>
    )
}



