import { useEffect } from "react";
import { getAllCategoriesIdRestaurant1 } from "../services/items";

export const useFetchCategories = (setCategoriesMenuRestaurant) => {

  useEffect(() => {
    getAllCategoriesIdRestaurant1()
      .then((data) => {
        setCategoriesMenuRestaurant(data)
      })
      .catch((err) => console.log(err))
  }, [setCategoriesMenuRestaurant]);

}
