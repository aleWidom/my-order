import { useContext } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../../../../context";
import brand from "../../../../images/brand.jpg";
import styles from "./MainBrand.module.css";

export const MainBrand = () => {
  const { setResults } = useContext(SearchContext);

  const handleClickMenu = () => {
    setResults([]);
  };

  return (
    <Link
      to={`/`}
      className={styles.containerMainBrand}
      onClick={handleClickMenu}
    >
      <img src={brand} alt={"brand"} className={styles.mainBrand} />
    </Link>
  );
};
