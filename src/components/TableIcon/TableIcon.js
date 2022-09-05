import { useContext } from 'react'
import { TableContext } from '../../context/tables'
import styles from './TableIcon.module.css'

const TableIcon = () => {

    const { table } = useContext(TableContext)

    return (
        <>
        <p  className={styles.table}>Mesa</p>
        <p className={styles.tableNumber}>{`${table.table_number}`} </p>
        </>
    )
}

export default TableIcon