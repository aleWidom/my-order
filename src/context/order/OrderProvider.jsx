
import { useState } from 'react';
import { OrderContext } from '.';

export const OrderProvider = ({ children }) => {

    const [categorySelected, setCategorySelected] = useState("Pizzanesas")

    const [categories, setCategories] = useState([]);

    const [cart, setCart] = useState([]) 

    const [foodCategory, setFoodCategory] = useState([])

    return (
        <OrderContext.Provider value={{
            categorySelected,
            setCategorySelected,
            categories,
            setCategories,
            cart,
            setCart,
            foodCategory
        }}>
            {children}
        </OrderContext.Provider>
    )
}



/* cart,
            valueInput,
            setValueInput,
            quantity,
            setQuantity,
            total,
            handleQuantityAdd,
            handleQuantitySubtract,
            handleChangeInput,
            handleClickCategory,
            handleCancelCall,
            handleCall,
            updateTableNumberCall,
            updateTableNumberNotCall,
            handleClickSelected,
            handleClickNotSelected,
            categorySelected,
            categories,
            foodCategory,
            call, */


/*

const priceQuantityCart = cart.map((e) => {
return { quantity: 1, price: e.price }
})

const [quantity, setQuantity] = useState(priceQuantityCart)



const [categories, setCategories] = useState([]);



const total = quantity.map((e) => { return e.quantity * e.price }).reduce((acumulador, actual) => acumulador + actual)
*/



/*
*/

/*  const handleQuantityAdd = (i) => () => {
     const quantityAdd = [...quantity]
     quantityAdd[i].quantity = quantityAdd[i].quantity + 1
     setQuantity(
         quantityAdd
     )
 } */

/* const handleQuantitySubtract = (i) => () => {
    const quantitySubtract = [...quantity]
    quantitySubtract[i].quantity = quantitySubtract[i].quantity - 1
    setQuantity(
        quantitySubtract
    )
} */

/* useEffect(() => {
    getItemsAccordingToSelectedCategory(categorySelected)
      .then((data) => {
        setFoodCategory(data)
      })
      .catch((err) => console.log(err))
  }, [categorySelected]);
 
 */