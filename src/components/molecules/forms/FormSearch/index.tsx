import { InputSearch, Search } from "../../../atoms";
import styles from "./FormSearch.module.scss";

export const FormSearch = () => {
  return (
    <form className={styles.containerFormSearch}>
      <InputSearch />
      <Search />
    </form>
  );
};
