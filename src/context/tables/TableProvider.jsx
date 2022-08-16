import { useState } from 'react';
import { TableContext } from './';

export const TableProvider = ({ children }) => {

    const [table, setTable] = useState('');

    const [tablesId1Restaurant, setTablesRestaurantId1] = useState([])

    const [call, setCall] = useState(false)

    return (
        <TableContext.Provider value={{
            table,
            setTable,
            tablesId1Restaurant,
            setTablesRestaurantId1,
            call,
            setCall
        }}>
            {children}
        </TableContext.Provider>
    )
}

