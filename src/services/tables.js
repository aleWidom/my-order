import { API } from 'aws-amplify'
import * as queries from '../graphql/queries';
import { /* updateTable_ as updateTable  */ } from '../graphql/mutations';


async function fetchTables() {
    try {
        const dataAllTables = await API.graphql({ query: queries.listTable_s })
        const tables = dataAllTables.data.listTable_s
        const tablesIdRestaurant1 = tables.filter((e) => e.id_restaurant === 1)
        return tablesIdRestaurant1;
    } catch (err) { console.log('error fetching tables') }
}

async function updateTableNumberActive(table) {
    try {
        /*       const updateTableActive = {
                ...table,
                table_active: 1
            };
    
            const updatedTable = await API.graphql({ query: updateTable, variables: { input: updateTableActive } });
    
            return updatedTable; */
        return table;
    }
    catch (err) { console.log(err) }
    return table;
}



export { fetchTables, updateTableNumberActive }