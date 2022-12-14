import { InputSearch, Search } from "../../../atoms";
import { ModalSearch } from "../../../molecules";
import styles from "./FormSearch.module.css";

export const FormSearch = () => {
  return (
    <form className={styles.containerFormSearch}>
      <InputSearch />
      <Search />
      <ModalSearch/>
    </form>
  );
};
