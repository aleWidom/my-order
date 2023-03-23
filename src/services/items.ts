import axios from 'axios';


async function fetchItemsRestaurant() {
	try {
		const allItems= await axios.get(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/items`);
		return allItems.data;
	} catch (err) {
		console.log(err);
	}
}


async function getAllCategoriesIdRestaurant1() {
	try {
		const allCategories = await axios.get(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/items?categories`);
		return allCategories.data;
	} catch (err) {
		console.log(err);
	}
}

async function getItemsAccordingToSelectedCategory(idCategorySelected: string) {
	try {
		const itemsAcordingToSelectedCategory = await axios.get(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/items?itemsAcordingCategory=${idCategorySelected}`)
		return itemsAcordingToSelectedCategory.data;
	} catch (err) {
		console.log(err);
	}
}

async function getItemsResults(valueInput: string) {
	try {
		const searchResults = await axios.get(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/items?search=${valueInput}`);
		return searchResults;
	} catch (err) {
		console.log(err);
	}
}


async function getItemsCardsRanking() {
	try {
		const cardsRankingPlates = await axios.get(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/items?ranking`);
		return cardsRankingPlates;
	} catch (err) {
		console.log(err);

	}
}

async function getItemsCardsSpecialsCheff() {
	try {
		const cardsRankingPlates = await axios.get(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/items?specials`);
		return cardsRankingPlates;
	} catch (err) {
		console.log(err);
	}
}

async function getItemsCardsDayPlates() {
	try {
		const cardsDayPlates = await axios.get(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/items?dayPlates`);
		return cardsDayPlates;
	} catch (err) {
		console.log(err);
	}
}


async function fetchItemPeopleInTable(id_peopleInTable: string) {
	try {
		const fetchItemPeopleInTable = await axios.get(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/items?fetchItemPeopleInTable=${id_peopleInTable}`);
		return fetchItemPeopleInTable.data;
	} catch (err) {
		console.log(err);
	}
}



async function makeDelivered(idItemPeopleInTable: string | undefined) {
	try {
		const  makeDelivered = await axios.post(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/items/${idItemPeopleInTable}?makeDelivered`);
		return  makeDelivered;
	} catch (err) {
		console.log(err);
	}
}

async function makePreparing(idItemPeopleInTable: string | undefined) {
	try {
		const  makeDelivered = await axios.post(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/items/${idItemPeopleInTable}?makePreparing`);
		return  makeDelivered;
	} catch (err) {
		console.log(err);
	}
}

export {
	fetchItemsRestaurant,
	getAllCategoriesIdRestaurant1,
	getItemsAccordingToSelectedCategory,
	getItemsCardsRanking,
	getItemsCardsDayPlates,
	getItemsCardsSpecialsCheff,
	getItemsResults,
	fetchItemPeopleInTable,
	makeDelivered,
	makePreparing
};

	

