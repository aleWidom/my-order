import axios from 'axios';

async function getAllCategoriesIdRestaurant1() {
  try {
    const allCategories = await axios.get(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/items?categories`);
    const allItemsIdRestaurant1 = await axios.get(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/items`);

    return allCategories.data.filter((category) => (
      allItemsIdRestaurant1.data.find((item) => (
        category.id === item.id_category && category
      ))
    ))
  } catch (err) { console.log(err) }
}

async function getItemsAccordingToSelectedCategory(categorySelected) {
  try {
    const allCategories = await axios.get(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/items?categories`);
    const selectedCategory = allCategories.data.find((e) => e.name === categorySelected)

    const allItemsIdRestaurant1 = await axios.get(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/items`);

    return allItemsIdRestaurant1.data.filter((e) => e.id_category === selectedCategory.id)
  } catch (err) { console.log(err) }
}


async function getItemsResults(valueInput) {
  try {
    const valueInputArray = valueInput.split(" ")
    const valueInputForQuery = valueInputArray.join('+')
    console.log(valueInputForQuery)
    const searchResults = await axios.get(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/items?search=${valueInputForQuery}`);
    console.log(searchResults)
    return searchResults;
  } catch (err) { console.log(err) }
}



async function getItemsCardsRanking() {
  try {
    const cardsRanking = await axios.get(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/items?ranking`);
    return cardsRanking;
  } catch (err) { console.log(err) }
}

async function getItemsCardsDayPlates() {
  try {
    const cardsDayPlates = await axios.get(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/items?dayPlates`);
    return cardsDayPlates;
  } catch (err) { console.log(err) }
}


export { getAllCategoriesIdRestaurant1, getItemsAccordingToSelectedCategory, getItemsCardsRanking, getItemsCardsDayPlates, getItemsResults }


