
import React, { useContext } from 'react'; 
import { FaSearch } from "react-icons/fa";
import { InputContext } from '../../context/input';
import styles from "./Input.module.css";

const Input = () => {


    const {valueInput, setValueInput} = useContext(InputContext)
  
    const handleChange = (e) => {
           setValueInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(valueInput)
    }

    return (
        <form className={styles.containerInputSearch}>
            <input onChange={handleChange} value={valueInput} placeholder={"Buscar..."} className={styles.input} />
            <button onClick={handleSubmit} className={styles.button}><FaSearch className={styles.search}/></button>
        </form>
    )
};

export default Input;
