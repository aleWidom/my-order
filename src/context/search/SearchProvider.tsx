import { useState } from "react";
import { SearchContext } from ".";
import { Plate,ModalInfo  } from "../../interfaces";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const SearchProvider = ({ children }: Props) => {
  const [valueInput, setValueInput] = useState<string>("");

  const [results, setResults] = useState<Plate[]>([]);

  const [nameCategorySelected, setNameCategorySelected] = useState<string>("");

  const [modalInfo , setModalInfo] = useState<ModalInfo>({
    description: "", 
    state: false,
    section: ""
  })

  return (
    <SearchContext.Provider
      value={{
        valueInput,
        setValueInput,
        results,
        setResults,
        nameCategorySelected,
        setNameCategorySelected,
        modalInfo, 
        setModalInfo
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
