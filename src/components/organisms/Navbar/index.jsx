import {useLocation} from "react-router-dom"
import {MainBrand, Table } from "../../atoms"
import styles from './Navbar.module.css'


export const Navbar = () => {

    const {pathname} = useLocation()

    const page = pathname.slice(-5) 

    return (
        <nav className={styles.containerNavbar}>
            <div className={styles.containerMenuBrand}>
          {/*       <Menu /> */}
               {page !== 'order' ? <MainBrand/> : "Hola"}
            </div>
            <div className={styles.containerTableWaiter}>
                <Table />
             {/*    <Waiter /> */}
            </div>
        </nav>
    )
}

