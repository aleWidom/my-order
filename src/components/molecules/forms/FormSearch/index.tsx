import { InputSearch, Search } from "../../../atoms";
import styles from "./FormSearch.module.css";

export const FormSearch = () => {
  return (
    <form className={styles.containerFormSearch}>
      <InputSearch />
      <Search />
    </form>
  );
};
