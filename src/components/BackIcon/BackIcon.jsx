import { useContext } from 'react';
import { TableContext } from '../../context/tables';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft } from "react-icons/fa";



const BackIcon = () => {

  const {table} = useContext(TableContext)

  return (
    <Link to={`/table/${table.table_number}/home`}>
      <FaArrowCircleLeft color={'#000'}  />
    </Link>
  )
}

export default BackIcon