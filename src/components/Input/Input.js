
import React, { useContext } from 'react'; 
import { FaSearch } from "react-icons/fa";
import { InputContext } from '../../context/input';
import { OrderContext } from '../../context/order';
import { getItemsResults } from '../../services';
import styles from "./Input.module.css";

const Input = () => {

    const {valueInput, setValueInput, setWordSearched} = useContext(InputContext)
    const {  setMenuWaiterActive } = useContext(OrderContext)

  
    const handleChange = (e) => {
        setValueInput(e.target.value)

    }

    const handleFocus= (e) => {
        setMenuWaiterActive(false)

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        getItemsResults(valueInput)
        .then(({data})=> {
            setWordSearched(data)
            console.log(data)
        })
        .catch((err) => err)
    }

    return (
        <form className={styles.containerInputSearch}>
            <input onChange={handleChange} onFocus={handleFocus} value={valueInput} placeholder={"Buscar..."} className={styles.input} />
            <button onClick={handleSubmit} className={styles.button}><FaSearch className={styles.search}/></button>
        </form>
    )
};

export default Input;
