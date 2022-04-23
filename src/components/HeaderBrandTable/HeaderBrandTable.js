import Brand from "../Brand/Brand";
import styles from "./HeaderBrandTable.module.css"

const HeaderBrandTable = ({ table }) => {
    return (
        <>
            <div className={styles.headerBrandTableContainer}>
                <Brand clases={styles.brand} />
                <div className={styles.table}>
                    <p>Mesa</p>
                    <p className={styles.tableNumber}>{`N° ${table.table_number}`} </p>
                </div>
            </div>
        </>
    )
};

export default HeaderBrandTable;
