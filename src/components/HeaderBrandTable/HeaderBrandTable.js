import { useContext } from "react";
import { TableContext } from "../../context/tables";
import Brand from "../Brand/Brand";
import styles from "./HeaderBrandTable.module.css"

const HeaderBrandTable = () => {

    const { table } = useContext(TableContext)

    return (
        <>
            <div className={styles.headerBrandTableContainer}>
                <div className={styles.brand}>
                    <Brand />
                </div>
                <div className={styles.table}>
                    <p>Mesa</p>
                    <p className={styles.tableNumber}>{`N° ${table.table_number}`} </p>
                </div>
            </div>
        </>
    )
};

export default HeaderBrandTable;
