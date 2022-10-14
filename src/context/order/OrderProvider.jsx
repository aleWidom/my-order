
import { useState } from 'react';
import { OrderContext } from '.';

export const OrderProvider = ({ children }) => {



    const [categoriesMenuRestaurant, setCategoriesMenuRestaurant] = useState([]);

    const [cardsRankingPlates, setCardsRankingPlates] = useState([])

    const [cardsDayPlates, setCardsDayPlates,] = useState([])

    const [menuWaiterActive, setMenuWaiterActive] = useState(false)

    const [modalPlate, setModalPlate] = useState({
        id: 0,
        state: false,
        title: "",
        price: 0,
        img: "",
        description: "",
        quantity: 1
    })
    
    const [cart, setCart] = useState([])

    
   /*  const [modalRequest, setModalRequest] = useState({
        state: false
    })
 */


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
            cart,
            setCart
          /*   modalRequest, 
            setModalRequest */
        }}>
            {children}
        </OrderContext.Provider>
    )
}



