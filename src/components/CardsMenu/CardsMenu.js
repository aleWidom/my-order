import { useContext } from "react";
import { OrderContext } from "../../context/order";
import CardMenu from "../CardMenu/CardMenu"
import styles from './CardsMenu.module.css'


const CardsMenu = ({title}) => {

    const { cart, setCart, categorySelected, platesSelectedCategoryRestaurant } = useContext(OrderContext)

    const handleClickSelected = (item) => () => {
        alert('Producto solicitado')
        const itemAdd = {
            ...item,
            quantity: 1
        }
        setCart([...cart, itemAdd])
    }

    console.log(platesSelectedCategoryRestaurant)

    return (
               
                    <>
                    <div className={styles.containerCardsMenu}>
                        <CardMenu >
                            {/*               <button className={styles.notAgreggate} onClick={handleClickSelected(e)}>Solicitar</button> */}
                        </CardMenu>
                        <CardMenu >
                            {/*               <button className={styles.notAgreggate} onClick={handleClickSelected(e)}>Solicitar</button> */}
                        </CardMenu>
                        <CardMenu >
                            {/*               <button className={styles.notAgreggate} onClick={handleClickSelected(e)}>Solicitar</button> */}
                        </CardMenu>
                    </div>
            </>
   
    )
};

export default CardsMenu;
