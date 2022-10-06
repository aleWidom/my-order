import styles from './InputSearch.module.css'

export const InputSearch = ({handleChange, handleFocus, valueInput}) => {
  return (
    <input onChange={handleChange} onFocus={handleFocus} value={valueInput} placeholder={"Buscar..."} className={styles.inputSearch} />
  )
}

