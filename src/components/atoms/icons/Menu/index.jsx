import { Link } from "react-router-dom";
import { FaBars} from "react-icons/fa";
import styles from "./Menu.module.css"

export const Menu = () => {
    return (
    <Link to={`/`} className={styles.containerMenu}>
      <FaBars color={'#f31f1f'} />
    </Link>
  )
}

