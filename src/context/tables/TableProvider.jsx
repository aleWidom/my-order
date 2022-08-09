import { useState } from 'react';
import { TableContext } from './';

export const TableProvider = ({ children }) => {

    const [table, setTable] = useState('');

    const [tablesId1Restaurant, setTablesRestaurantId1] = useState([])

    const [call, setCall] = useState(false)

    return (
        <TableContext.Provider value={{
            table,
            setTable,
            tablesId1Restaurant,
            setTablesRestaurantId1,
            call,
            setCall
        }}>
            {children}
        </TableContext.Provider>
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

const [categorySelected, setCategorySelected] = useState("Pizzanesas")

const [categories, setCategories] = useState([]);

const [foodCategory, setFoodCategory] = useState([])

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

    //CardsCategories
/*  const handleClickCategory = (cardSelected) => () => {
     setCategorySelected(cardSelected.name)
 } */

    //CardsDishfood
/*   const handleClickSelected = (item) => () => {
      setCart([...cart, item])
  } */

    //CardsDishfood
/*  const handleClickNotSelected = (item) => () => {
     const cartCurrent = cart.filter((e) => e.id !== item.id)
     setCart(cartCurrent)
 } */



/*     const [cart, setCart] = useState([]) */