import axios from 'axios';

async function fetchOrders() {
	try {
		const response = await axios.get(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/orders`);
		return response.data;
	} catch (err) {
		console.log(err);
	}
}

async function ordersCreate(tableNumber: string | null) {
	try {
		const response = await axios.get(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/orders/${tableNumber}?create`);
		return response.data;
	} catch (err) {
		console.log(err);
	}
}

export { fetchOrders, ordersCreate };
