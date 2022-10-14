import {MainBrand, Table } from "../../atoms"
import styles from './Navbar.module.css'


export const Navbar = () => {
    return (
        <nav className={styles.containerNavbar}>
            <div className={styles.containerMenuBrand}>
          {/*       <Menu /> */}
                <MainBrand />
            </div>
            <div className={styles.containerTableWaiter}>
                <Table />
             {/*    <Waiter /> */}
            </div>
        </nav>
    )
}

