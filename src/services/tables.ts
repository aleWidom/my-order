import axios from 'axios';

async function updateTableNumberActive(table: string | null) {
	try {
		const response = await axios.put(
			/*or get*/ `https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/tables/${table}?activate=activate`
		);
		return response.data;
	} catch (err) {
		console.log(err);
	}
}

async function updateTableNumberDesactive(table: string) {
	try {
		const response = await axios.put(
			/*or get*/ `https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/tables/${table}?desactivate=desactivate`
		);
		return response.data;
	} catch (err) {
		console.log(err);
	}
}

async function updateTableNumberCall(table: string) {
	try {
		const response = await axios.put(
			/*or get*/ `https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/tables/${table}?call=call`
		);
		return response.data;
	} catch (err) {
		console.log(err);
	}
}

async function updateTableNumberNotCall(table: string) {
	try {
		const response = await axios.put(
			/*or get*/ `https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/tables/${table}?call=notCall`
		);
		return response.data;
	} catch (err) {
		console.log(err);
	}
}


async function peopleInTableFetch(tableId: string | null) {
	try {
		const response = await axios.get(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/tables/${tableId}?peopleInTableSearch`);
		return response.data;
	} catch (err) {
		console.log(err);
	}
}


async function peopleInTable(idPeopleInTable: string, tableId: string | null) {
	try {
		const response = await axios.post(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/tables/${idPeopleInTable}/${tableId}?peopleInTable`);
		return response.data;
	} catch (err) {
		console.log(err);
	}
}

async function itemPeopleInTable(idItemPeopleInTable: string, idPeopleInTable: string, quantity: number, idItem: string) {
	try {
		const response = await axios.post(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/tables/${idItemPeopleInTable}/${idPeopleInTable}/${quantity}/${idItem}?itemPeopleInTable`);
		return response;
	} catch (err) {
		console.log(err);
	}
}



export {
	updateTableNumberActive,
	updateTableNumberDesactive,
	updateTableNumberCall,
	updateTableNumberNotCall,
	peopleInTableFetch,
	peopleInTable,
	itemPeopleInTable,
};
