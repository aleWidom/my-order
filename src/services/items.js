import axios from 'axios';

async function getAllCategoriesIdRestaurant1() {
  try {
    const allCategories = await axios.get(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/items?categories`);
    const allItemsIdRestaurant1 = await axios.get(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/items`);


    console.log(allCategories)
    console.log(allItemsIdRestaurant1)

    const categoriesIdRestaurant1 = allCategories.data.map((category) => (
      allItemsIdRestaurant1.data.map((item) => (
        category.id === item.id_category && category
      ))
    ))
    console.log(categoriesIdRestaurant1)
    return categoriesIdRestaurant1;
  } catch (err) { console.log(err) }
}

/* async function getItemsAccordingToSelectedCategory(categories, categorySelected) {
  const categoryDish = categories.length && categories.find((e) => e.name === categorySelected)
  try {
    const itemsData = await API.graphql({ query: queries.listItems })
    return itemsData.data.listItems.filter((e) => e.id_category === categoryDish.id)
  } catch (err) { console.log(err) }
} */


export { getAllCategoriesIdRestaurant1 /*getItemsAccordingToSelectedCategory */ }



