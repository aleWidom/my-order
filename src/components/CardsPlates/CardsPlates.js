import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { OrderContext } from "../../context/order";
import CardPlate from "../CardPlate/CardPlate"
import styles from './CardsPlates.module.css'


const CardsPlates = () => {

    const { cart, setCart, categorySelected, platesSelectedCategoryRestaurant } = useContext(OrderContext)

    const handleClickSelected = (item) => () => {
        alert('Producto solicitado')
        const itemAdd = {
            ...item,
            quantity: 1
        }
        setCart([...cart, itemAdd])
    }

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{/* {categorySelected} */}Platos</h3>
            <div className={styles.cardsPlates}>
             {/*    {platesSelectedCategoryRestaurant.map((e) => (
                    <CardPlate key={e.id} price={`$${e.price}`} header={e.title} description={e.description} source={e.photo}>
                        <button className={styles.notAgreggate} onClick={handleClickSelected(e)}>Solicitar</button>
                    </CardPlate>
                ))} */}
            </div>
        </div>
    )
};

export default CardsPlates;
