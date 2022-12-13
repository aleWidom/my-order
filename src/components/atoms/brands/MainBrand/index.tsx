import { useContext } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";
import { SearchContext } from "../../../../context";
import brand from "../../../../images/brand.jpg";
import styles from "./MainBrand.module.css";

export const MainBrand = () => {
  const { setResults } = useContext(SearchContext);

  const handleClickMenu = () => {
    setResults([]);
  };

  const { pathname } = useLocation()

  const page = pathname.slice(-5)

  return (
    <Link to={`/`} className={styles.containerMainBrand} onClick={handleClickMenu}>
      {page !== 'order' ? <img src={brand} alt={"brand"} className={styles.mainBrand} /> :
        <div className={styles.iconOrder}>
          <FaAngleLeft />
        </div>
      }
    </Link>
  );
};














