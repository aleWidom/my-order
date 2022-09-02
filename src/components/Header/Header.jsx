import { useContext } from "react";
import { TableContext } from "../../context/tables";
import Brand from "../Brand/Brand";
import MenuIcon from "../MenuIcon/MenuIcon";
import WaiterIcon from "../WaiterIcon/WaiterIcon"
import styles from "./Header.module.css"

const Header = () => {

    const { table } = useContext(TableContext)

    return (
        <>
            <div className={styles.container}>
                <div className={styles.containerMenuBrand}>
                    <div className={styles.menuIcon}>
                        <MenuIcon />
                    </div>
                    <div className={styles.brand}>
                        <Brand />
                    </div>
                </div>
                <div className={styles.containerTableWaiter}>
                    <div className={styles.table}>
                        <p className={styles.tableNumber}>Mesa {`N° ${table.table_number}`} </p>
                    </div>
                    <div className={styles.waiter}>
                        <WaiterIcon />
                    </div>
                </div>
            </div>
        </>
    )
};

export default Header;
