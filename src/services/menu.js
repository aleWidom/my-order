import { API } from 'aws-amplify'
import * as queries from '../graphql/queries';


async function getAllCategories() {
  try {
    const categoriesData = await API.graphql({ query: queries.listCategorys })
    const categories = categoriesData.data.listCategorys
    console.log(categories)
    return categories

  } catch (err) { console.log('error fetching todos') }
}


async function getAllItems(categories, categorySelected) {
  const categoryDish = categories.length && categories.find((e) => e.name === categorySelected)
  try {
    const itemsData = await API.graphql({ query: queries.listItems })
    return itemsData.data.listItems.filter((e) => e.id_category === categoryDish.id)
  } catch (err) { console.log(err) }
}


export { getAllCategories, getAllItems }