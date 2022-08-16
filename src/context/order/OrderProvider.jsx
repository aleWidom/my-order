
import { useState } from 'react';
import { OrderContext } from '.';

export const OrderProvider = ({ children }) => {

    const [nameCategorySelected, setNameCategorySelected] = useState("Pizzanesas")

    const [categoriesMenuRestaurant, setCategoriesMenuRestaurant] = useState([]);

    const [cart, setCart] = useState([])

    const [platesSelectedCategoryRestaurant, setPlatesSelectedCategoryRestaurant] = useState([])

    return (
        <OrderContext.Provider value={{
            nameCategorySelected,
            setNameCategorySelected,
            categoriesMenuRestaurant,
            setCategoriesMenuRestaurant,
            cart,
            setCart,
            platesSelectedCategoryRestaurant,
            setPlatesSelectedCategoryRestaurant
        }}>
            {children}
        </OrderContext.Provider>
    )
}



