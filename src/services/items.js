import axios from 'axios';

async function getAllCategoriesIdRestaurant1() {
  try {
    const allItemsIdRestaurant1 = await axios.get(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/items`);
    const allCategories = await axios.get(`https://18eqrnlodc.execute-api.us-east-1.amazonaws.com/dev/items?categories`);

    const categoriesIdRestaurant1 = allItemsIdRestaurant1.data.map((e) => {
        return e.id_category
    })

   /*  const  = allCategories.data.map((e)=> {

    })
 */

  } catch (err) { console.log(err) }
}

/* async function getItemsAccordingToSelectedCategory(categories, categorySelected) {
  const categoryDish = categories.length && categories.find((e) => e.name === categorySelected)
  try {
    const itemsData = await API.graphql({ query: queries.listItems })
    return itemsData.data.listItems.filter((e) => e.id_category === categoryDish.id)
  } catch (err) { console.log(err) }
} */


export {getAllCategoriesIdRestaurant1 /*getItemsAccordingToSelectedCategory */ } 



