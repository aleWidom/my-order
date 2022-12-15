import { createContext } from "react";
import { Plate, ModalInfo } from "../../interfaces";

interface ContextProps {
  valueInput: string;
  setValueInput: (description: string) => void;
  results: Plate[];
  setResults: (description: Plate[]) => void;
  nameCategorySelected: string;
  setNameCategorySelected: (description: string) => void;
  modalInfo: ModalInfo, 
  setModalInfo: (description: ModalInfo) => void;
}

export const SearchContext = createContext({} as ContextProps);
