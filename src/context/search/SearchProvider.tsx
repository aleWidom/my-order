import { useState } from "react";
import { SearchContext } from ".";
import { Plate } from "../../interfaces";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const SearchProvider = ({ children }: Props) => {
  const [valueInput, setValueInput] = useState<string>("");

  const [results, setResults] = useState<Plate[]>([]);

  const [nameCategorySelected, setNameCategorySelected] = useState<string>("");

  return (
    <SearchContext.Provider
      value={{
        valueInput,
        setValueInput,
        results,
        setResults,
        nameCategorySelected,
        setNameCategorySelected,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
