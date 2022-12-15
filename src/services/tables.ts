import axios from "axios";
import { Table } from "../interfaces";

async function fetchTables() {
  try {
    const response = await axios.get(
      `https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/tables`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

async function updateTableNumberActive(table: Table) {
  try {
    const response = await axios.put(
      /*or get*/ `https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/tables/${table.id}?activate=activate`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

async function updateTableNumberCall(table: Table) {
  try {
    const response = await axios.put(
      /*or get*/ `https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/tables/${table.id}?call=call`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

async function updateTableNumberNotCall(table: Table) {
  try {
    const response = await axios.put(
      /*or get*/ `https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/tables/${table.id}?call=notCall`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export {
  fetchTables,
  updateTableNumberActive,
  updateTableNumberCall,
  updateTableNumberNotCall,
};