import { useContext } from 'react';
import { TableContext } from '../../../../context/tables';
import { Link } from 'react-router-dom';
import styles from './Categorie.module.css'

export const Categorie = ({ description, handleClick, state}) => {

  const { table } = useContext(TableContext)

  return (
  <div onClick={handleClick} className={state === 'selected' ? styles.selected : styles.notSelected}>
    <Link to={`/table/${table.table_number}/menu`} className={state === 'selected' ? styles.linkSelected : styles.linkNotSelected}>
      <p>{description}</p>
    </Link>
  </div>
)
};





