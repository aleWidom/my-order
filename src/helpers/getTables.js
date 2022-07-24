
import { fetchTables } from '../services'


export const getTables = async () => {

    const tables = await fetchTables()

    const data = await tables.json()

    return data

}






