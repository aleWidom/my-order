import { API } from 'aws-amplify'
import * as queries from '../graphql/queries';


async function getAllCategories() {
  try {
    const categoriesData = await API.graphql({ query: queries.listCategorys })
    const categories = categoriesData.data.listCategorys
    return categories

  } catch (err) { console.log('error fetching todos') }
}


async function getAllProducts() {
  try {
    const itemsData = await API.graphql({ query: queries.listItems })
    const items = itemsData.data.listItems
    const tablesId1 = items.map((e) => {
      return e
    })
    return tablesId1;
  } catch (err) { console.log('error fetching todos') }
}


export { getAllCategories, getAllProducts }