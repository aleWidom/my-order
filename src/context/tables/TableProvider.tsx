import { useState } from "react";
import { TableContext } from ".";
import { Table, TableRestaurantOptions } from "../../interfaces";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const TableProvider = ({ children }: Props) => {
  //TODO DEBE IR UN OBJETO COMO MESA
  const [table, setTable] = useState<Table>({
    id: 1,
    table_number: "5",
  });

  const [tablesId1Restaurant, setTablesRestaurantId1] = useState<
    TableRestaurantOptions[]
  >([]);

  const [call, setCall] = useState<boolean>(false);

  return (
    <TableContext.Provider
      value={{
        table,
        setTable,
        tablesId1Restaurant,
        setTablesRestaurantId1,
        call,
        setCall,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};
