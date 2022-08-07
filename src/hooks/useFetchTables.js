import { useContext, useEffect } from "react"
import { TableContext } from "../context/tables"
import { fetchTables } from "../services"


export const useFetchTables = () => {

    const { tablesId1Restaurant, setTablesRestaurantId1 } = useContext(TableContext)

    useEffect(() => {
        fetchTables()
            .then((data) => {
                setTablesRestaurantId1(data)
            })
    }, [setTablesRestaurantId1])

    return {
        tablesId1Restaurant
    }
}
