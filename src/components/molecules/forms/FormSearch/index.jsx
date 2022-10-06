import { useContext } from 'react';
import {InputSearch, Search} from '../../../atoms'
import {OrderContext, SearchContext } from '../../../../context';
import { getItemsResults } from '../../../../services';
import styles from "./FormSearch.module.css";

export const FormSearch = () => {

    const {valueInput, setValueInput, setResultsSearched} = useContext(SearchContext)
   
    const {  setMenuWaiterActive } = useContext(OrderContext)

  
    const handleChange = (e) => {
        setValueInput(e.target.value)

    }

    const handleFocus = (e) => {
        setMenuWaiterActive(false)
        setResultsSearched([])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
       if(valueInput.length === 0) {
            setResultsSearched([])
            alert('Debe ingresar una palabra para iniciar con la búsqueda')
       } else {
        getItemsResults(valueInput)
        .then(({data})=> {
            if(data.length === 0) {
                alert('No hay elementos que coincidan con la búsqueda, intente con otras palabras')
                setValueInput("")
            }
            else {
                setResultsSearched(data)
            }
        })
        .catch((err) => err)
       }
    }

    return (
        <form className={styles.containerFormSearch}>
           <InputSearch handleChange={handleChange} handleFocus={handleFocus} valueInput={valueInput}/>
           <Search handleSubmit={handleSubmit}/>
        </form>
    )
}


/* 
import React, { useContext } from 'react'; 
import { FaSearch } from "react-icons/fa";
import { SearchContext } from '../../context/search';
import { OrderContext } from '../../context/order';
import { getItemsResults } from '../../services';
import styles from "./Search.module.css";

const Search = () => {

    const {valueInput, setValueInput, setResultsSearched} = useContext(SearchContext)
    const {  setMenuWaiterActive } = useContext(OrderContext)

  
    const handleChange = (e) => {
        setValueInput(e.target.value)

    }

    const handleFocus = (e) => {
        setMenuWaiterActive(false)
        setResultsSearched([])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
       if(valueInput.length === 0) {
            setResultsSearched([])
            alert('Debe ingresar una palabra para iniciar con la búsqueda')
       } else {
        getItemsResults(valueInput)
        .then(({data})=> {
            if(data.length === 0) {
                alert('No hay elementos que coincidan con la búsqueda, intente con otras palabras')
                setValueInput("")
            }
            else {
                setResultsSearched(data)
            }
        })
        .catch((err) => err)
       }
    }


    return (
        <form className={styles.containerInputSearch}>
            <input onChange={handleChange} onFocus={handleFocus} value={valueInput} placeholder={"Buscar..."} className={styles.input} />
            
        </form>
    )
};

export default Search;
 */