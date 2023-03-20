import { useContext } from 'react'
import { TableContext } from '../../../../context/tables'
import styles from './Table.module.scss'

export const Table = () => {

    const { sittingOnTheTable } = useContext(TableContext)

    return (
        <div className={styles.containerTable}>
            <p className={styles.table}>Mesa</p>
            <p className={styles.tableNumber}>{`${sittingOnTheTable}`} </p>
        </div>
    )
}
