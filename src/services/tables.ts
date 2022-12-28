import axios from 'axios';
import { Table } from '../interfaces';

async function fetchTables() {
	try {
		const response = await axios.get(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/tables`);
		return response.data;
	} catch (err) {
		console.log(err);
	}
}

async function updateTableNumberActive(table: Table) {
	try {
		const response = await axios.put(
			/*or get*/ `https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/tables/${table.table_number}?activate=activate`
		);
		return response.data;
	} catch (err) {
		console.log(err);
	}
}

async function updateTableNumberDesactive(table: string) {
	try {
		const response = await axios.put(/*or get*/ `https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/tables/${table}?desactivate`);
		return response.data;
	} catch (err) {
		console.log(err);
	}
}

async function updateTableNumberCall(table: Table) {
	try {
		const response = await axios.put(
			/*or get*/ `https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/tables/${table.table_number}?call=call`
		);
		return response.data;
	} catch (err) {
		console.log(err);
	}
}

async function updateTableNumberNotCall(table: Table) {
	try {
		const response = await axios.put(
			/*or get*/ `https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/tables/${table.table_number}?call=notCall`
		);
		return response.data;
	} catch (err) {
		console.log(err);
	}
}

export { fetchTables, updateTableNumberActive, updateTableNumberDesactive, updateTableNumberCall, updateTableNumberNotCall };
