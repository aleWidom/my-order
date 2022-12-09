import { createContext } from "react";
import { Plate } from "../../interfaces";

interface ContextProps {
  valueInput: string;
  setValueInput: (description: string) => void;
  results: Plate[];
  setResults: (description: Plate[]) => void;
  nameCategorySelected: string;
  setNameCategorySelected: (description: string) => void;
}

export const SearchContext = createContext({} as ContextProps);
