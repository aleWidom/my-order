import { useEffect, useState } from "react";
import { getAllProducts, getAllCategories } from "../../services/menu";
import { FaTrashAlt } from "react-icons/fa";
import CardDishFood from "./CardDishFood"
import styles from "./CardsDishFood.module.css"


const CardsDishFood = ({ category, cart, setCart }) => {

    const [foodCategory, setFoodCategory] = useState([])

    const [cardsHeaderMenu, setCardsHeaderMenu] = useState("");


    useEffect(() => {
        getAllCategories()
            .then((data) => {
                const categories = data.find((e) => {
                    return e.name === category
                })
                setCardsHeaderMenu(categories)
            })
            .catch((err) => console.log(err))

    }, [category])


    useEffect(() => {
        getAllProducts()
            .then((data) => {
                const dishAccordingCategory = data.filter((e) => e.id_category === cardsHeaderMenu.id)
                setFoodCategory(dishAccordingCategory)
            })
            .catch((err) => console.log(err))

    }, [cardsHeaderMenu.id])


    const handleClickSelected = (item) => () => {
        setCart([...cart, item])
    }

    const handleClickNotSelected = (item) => () => {
        const cartCurrent = cart.filter((e) => e.id !== item.id)
        setCart(cartCurrent)
    }


    return (
        <div className={styles.container}>
            <h3 className={styles.header}>{category}</h3>
            {foodCategory.map((e) => (
                cart.filter((item) => item.id === e.id).length > 0 ?
                    <CardDishFood key={e.id} price={`$${e.price}`} header={e.title} description={e.description} source={e.photo}>
                        <button className={styles.agreggate}>Agregado</button>
                        <FaTrashAlt onClick={handleClickNotSelected(e)} className={styles.buttonRemove} />
                    </CardDishFood>
                    :
                    <CardDishFood key={e.id} price={`$${e.price}`} header={e.title} description={e.description} source={e.photo}>
                        <button className={styles.notAgreggate} onClick={handleClickSelected(e)}>Agregar al pedido</button>
                    </CardDishFood>
            ))}
        </div>
    )
};

export default CardsDishFood;
