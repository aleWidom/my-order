import styles from './Table.module.scss'

export const Table = () => {

	const  numberTable = JSON.parse(localStorage.getItem('table') as any)

    return (
        <div className={styles.containerTable}>
            <p className={styles.table}>Mesa</p>
            <p className={styles.tableNumber}>{`${numberTable}`} </p>
        </div>
    )
}
