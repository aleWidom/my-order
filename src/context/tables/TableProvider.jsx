import { useState } from "react";
import { TableContext } from "./";

export const TableProvider = ({ children }) => {
  //TODO DEBE IR UN OBJETO COMO MESA
  const [table, setTable] = useState({
    id: 1,
    table_number: 5,
  });

  const [tablesId1Restaurant, setTablesRestaurantId1] = useState([]);

  const [call, setCall] = useState(false);

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
