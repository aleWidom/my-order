/* import { API } from 'aws-amplify'
import * as queries from '../graphql/queries';
import { updateTable_ as updateTable } from '../graphql/mutations';


async function fetchTables() {
    try {
        const dataAllTables = await API.graphql({ query: queries.listTable_s })
        const tables = dataAllTables.data.listTable_s
        const tablesIdRestaurant1 = tables.filter((e) => e.id_restaurant === 1)
        return tablesIdRestaurant1;

    } catch (err) { console.log(err) }
}

async function updateTableNumberActive(table) {
    try {
        const updatedTable = await API.graphql({
            query: updateTable,
            variables: {
                updateTable_Input: {
                    id: table.id,
                    table_active: 1
                }
            }
        });
        return updatedTable;
    }
    catch (err) { console.log(err) }
}

async function updateTableNumberCall(table) {
    try {
        const updatedTableCall = await API.graphql({
            query: updateTable,
            variables: {
                updateTable_Input: {
                    id: table.id,
                    table_call: 1
                }
            }
        })
        return updatedTableCall;
    }
    catch (err) { console.log(err) }
}

async function updateTableNumberNotCall(table) {
    try {
        const updatedTableNotCall = await API.graphql({
            query: updateTable,
            variables: {
                updateTable_Input: {
                    id: table.id,
                    table_call: 0
                }
            }
        });
        return updatedTableNotCall;
    }
    catch (err) { console.log(err) }
}



export { fetchTables, updateTableNumberActive, updateTableNumberCall, updateTableNumberNotCall } */