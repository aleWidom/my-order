import { Menu, MainBrand, Table, Waiter } from "../../atoms"
import styles from './Navbar.module.css'


export const Navbar = () => {
    return (
        <nav className={styles.containerNavbar}>
            <Menu />
            <MainBrand />
            <Table/>
            <Waiter/>
        </nav>
    )
}

