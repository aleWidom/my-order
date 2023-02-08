import { createContext } from "react";
import { Plate, ModalInfo, CategoryRestaurant } from "../../interfaces";

interface ContextProps {
  valueInput: string;
  setValueInput: (description: string) => void;
  results: Plate[];
  setResults: (description: Plate[] | []) => void;
  categorySelected: CategoryRestaurant ;
  setCategorySelected: (description: CategoryRestaurant ) => void;
  modalInfo: ModalInfo, 
  setModalInfo: (description: ModalInfo) => void;
}

export const SearchContext = createContext({} as ContextProps);
