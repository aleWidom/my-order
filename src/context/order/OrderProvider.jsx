
import { useState } from 'react';
import { OrderContext } from '.';

export const OrderProvider = ({ children }) => {

    const [nameCategorySelected, setNameCategorySelected] = useState("Pizzanesas")

    const [categoriesMenuRestaurant, setCategoriesMenuRestaurant] = useState([]);

    const [platesSelectedCategoryRestaurant, setPlatesSelectedCategoryRestaurant] = useState([])

    return (
        <OrderContext.Provider value={{
            nameCategorySelected,
            setNameCategorySelected,
            categoriesMenuRestaurant,
            setCategoriesMenuRestaurant,
            platesSelectedCategoryRestaurant,
            setPlatesSelectedCategoryRestaurant
        }}>
            {children}
        </OrderContext.Provider>
    )
}



