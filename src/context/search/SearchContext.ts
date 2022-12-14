import { createContext } from "react";
import { Plate, ModalSearch } from "../../interfaces";

interface ContextProps {
  valueInput: string;
  setValueInput: (description: string) => void;
  results: Plate[];
  setResults: (description: Plate[]) => void;
  nameCategorySelected: string;
  setNameCategorySelected: (description: string) => void;
  modalSearchInfo: ModalSearch, 
  setModalSearchInfo: (description: ModalSearch) => void;
}

export const SearchContext = createContext({} as ContextProps);
