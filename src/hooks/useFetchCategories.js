import { useContext, useEffect } from "react";
import { OrderContext } from "../context/order";
import { getAllCategoriesIdRestaurant1 } from "../services/items";

export const useFetchCategories = () => {

    const {setCategories} = useContext(OrderContext)

    useEffect(() => {
        getAllCategoriesIdRestaurant1()
          .then((data) => {
            setCategories(data)
          })
          .catch((err) => console.log(err))
      }, []);
      
}
