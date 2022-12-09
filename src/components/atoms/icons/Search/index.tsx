import { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { SearchContext } from "../../../../context";
import { getItemsResults } from "../../../../services";
import styles from "./Search.module.css";

export const Search = () => {
  const { valueInput, setValueInput, setResults, setNameCategorySelected } =
    useContext(SearchContext);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (valueInput.length === 0) {
      alert("Debe ingresar una palabra para iniciar con la búsqueda");
    } else {
      getItemsResults(valueInput)
        //TODO DATA NO DEBE SER ANY
        .then(({ data }: any) => {
          if (data.length === 0) {
            alert(
              "No hay elementos que coincidan con la búsqueda, intente con otras palabras"
            );
            setValueInput("");
          } else {
            setResults(data);
            setNameCategorySelected("");
          }
        })
        .catch((err) => err);
    }
  };

  return (
    <button onClick={handleSubmit} className={styles.button}>
      <FaSearch className={styles.search} />
    </button>
  );
};
