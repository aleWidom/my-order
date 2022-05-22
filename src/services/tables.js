import axios from 'axios';

/* 



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


async function fetchTables() {
    try {
        const response = await axios.get(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/tables`);
        return response.data;
    } catch (err) { console.log(err) }
}

async function updateTableNumberActive(table) {
    try {
        const response = await axios.get(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/tables/${table.id}`);
        return response.data;
    }
    catch (err) { console.log(err) }
}

export { fetchTables, updateTableNumberActive } 