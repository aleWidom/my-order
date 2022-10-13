import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaBars} from "react-icons/fa";
import {SearchContext } from "../../../../context";
import styles from "./Menu.module.css"

export const Menu = () => {

 const {setResults} = useContext(SearchContext)
  
  const handleClickMenu = () => {
    setResults([])
  } 
  
  return (
    <Link to={`/`} className={styles.containerMenu} onClick={handleClickMenu}>
      <FaBars color={'#f31f1f'} className={styles.menu}  />
    </Link>
  )
}

