import { createContext } from "react";
import { Table, TableRestaurantOptions } from "../../interfaces";

interface ContextProps {
  table: Table;
  setTable: (description: Table) => void;
  tablesId1Restaurant: TableRestaurantOptions[];
  setTablesRestaurantId1: (description: TableRestaurantOptions[]) => void;
  call: boolean;
  setCall: (description: boolean) => void;
}

export const TableContext = createContext({} as ContextProps);
