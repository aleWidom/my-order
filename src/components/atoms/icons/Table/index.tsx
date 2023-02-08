import { useContext } from 'react'
import { TableContext } from '../../../../context/tables'
import styles from './Table.module.scss'

export const Table = () => {

    const { table } = useContext(TableContext)

    return (
        <div className={styles.containerTable}>
            <p className={styles.table}>Mesa</p>
            <p className={styles.tableNumber}>{`${table.TableID}`} </p>
        </div>
    )
}
