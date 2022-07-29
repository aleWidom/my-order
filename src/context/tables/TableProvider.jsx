import { useState } from 'react';
import { TableContext } from './';

/* import { updateTableNumberActive, updateTableNumberNotCall, updateTableNumberCall } from '../services/tables'; */

export const TableProvider = ({children}) => {

    const [table, setTable] = useState('mesa mesa mesa');
    /* 
        const [tablesId1Restaurant, setTablesRestaurantId1] = useState([]) */

    return (
        <TableContext.Provider value={{
            table,
            setTable
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


/*  const [valueInput, setValueInput] = useState("")

const [errInput, setErrInput] = useState(false)

const priceQuantityCart = cart.map((e) => {
return { quantity: 1, price: e.price }
})

const [quantity, setQuantity] = useState(priceQuantityCart)

const [categorySelected, setCategorySelected] = useState("Pizzanesas")

const [categories, setCategories] = useState([]);

const [foodCategory, setFoodCategory] = useState([])

const total = quantity.map((e) => { return e.quantity * e.price }).reduce((acumulador, actual) => acumulador + actual)
*/

/*   const handleChangeInput = (e) => {
      setValueInput(e.target.value)
      setTable("")
      if (e.target.value.length > 2) {
          const value = e.target.value
          const tableNumberEntered = tablesId1Restaurant.find((e) => e.table_number.toUpperCase() === value.toUpperCase() && e.table_active === 0)
          if (tableNumberEntered !== undefined) {
              setTable(tableNumberEntered)
              setErrInput(false)
          }
      }
  } */

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

/*     const [call, setCall] = useState(false) */

/*  const handleCall = () => {
     setCall(true)
     updateTableNumberCall(table)
         .then((data) => {
             const newTableCall = {
                 ...table,
                 table_call: 1
             }
             setTable(newTableCall)
         })
         .catch((err) => err)
 } */
/*
    const handleCancelCall = () => {
        setCall(false)
        updateTableNumberNotCall(table)
            .then((data) => {
                const newTableNotCall = {
                    ...table,
                    table_call: 0
                }
                setTable(newTableNotCall)
            })
            .catch((err) => err)
    } */


/*     const [cart, setCart] = useState([]) */