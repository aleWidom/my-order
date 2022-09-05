
import {useLocation} from "react-router-dom"
import Brand from "../Brand/Brand";
import MenuIcon from "../MenuIcon/MenuIcon";
import BackIcon from "../BackIcon/BackIcon"
import TableIcon from "../TableIcon/TableIcon";
import WaiterIcon from "../WaiterIcon/WaiterIcon"
import styles from "./Header.module.css"

const Header = () => {

   const {pathname} = useLocation()

   const page = pathname.slice(-4)

    return (
        <>
            <div className={styles.container}>
                <div className={styles.containerMenuBrand}>
                    <div className={styles.menuIcon}>
                        {page === 'home' ? <MenuIcon /> : <BackIcon/>}
                    </div>
                    <div className={styles.brand}>
                        <Brand />
                    </div>
                </div>
                <div className={styles.containerTableWaiter}>
                    <div className={styles.table}>
                       <TableIcon/>
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
