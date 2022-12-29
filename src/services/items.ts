import axios from 'axios';
import { CategoryRestaurant, Plate } from '../interfaces';

async function getAllCategoriesIdRestaurant1() {
	try {
		const allCategories = await axios.get(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/items?categories`);
		return allCategories.data;
	} catch (err) {
		console.log(err);
	}
}

async function getItemsAccordingToSelectedCategory(categorySelected: string) {
	try {
		const allCategories = await axios.get(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/items?categories`);
		const selectedCategory = allCategories.data.find((e: CategoryRestaurant) => e.name === categorySelected);

		const allItemsIdRestaurant1 = await axios.get(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/items`);

		return allItemsIdRestaurant1.data.filter((e: Plate) => e.id_category === selectedCategory.id);
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

async function getItemsResultsCardHome(cardTitle: string) {
	try {
		const searchResultsCardHome = await axios.get(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/items?search=${cardTitle}`);
		return searchResultsCardHome;
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

export {
	getAllCategoriesIdRestaurant1,
	getItemsAccordingToSelectedCategory,
	getItemsCardsRanking,
	getItemsCardsDayPlates,
	getItemsCardsSpecialsCheff,
	getItemsResults,
	getItemsResultsCardHome,
};
