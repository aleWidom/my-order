import axios from 'axios';
import { TableRestaurantOptions } from '../interfaces';


async function fetchTables() {
	try {
		const response = await axios.get(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/tables`);
		return response.data;
	} catch (err) {
		console.log(err);
	}
}

async function fetchTablesActive() {
	try {
		const response = await axios.get(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/tables?active`);
		return response.data;
	} catch (err) {
		console.log(err);
	}
}

async function fetchTablesActiveCall() {
	try {
		const response = await axios.get(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/tables?activeCall `);
		return response.data;
	} catch (err) {
		console.log(err);
	}
}

async function fetchTableStatusCall(tableNumber: string | null) {
	try {
		const response = await axios.get(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/tables/${tableNumber}?searchTable `);
		const data: TableRestaurantOptions[] = response.data;


		if (data[0].table_call === '1') {
			return true;
		} else {
			return false;
		}
	} catch (err) {
		console.log(err);
	}
}

async function fetchOrderItem() {
	try {
		const response = await axios.get(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/tables?itemPeopleInTableJoin`);
        return response.data;

	} catch (err) {
		console.log(err);
	}
}

export {
	fetchTables,
	fetchTablesActive,
	fetchTablesActiveCall,
	fetchTableStatusCall,
    fetchOrderItem
};
