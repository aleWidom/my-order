import { useEffect } from "react";
import { getItemsAccordingToSelectedCategory } from "../services";

export const useFetchPlates = (nameCategorySelected, setPlatesSelectedCategoryRestaurant) => {
  useEffect(() => {
    getItemsAccordingToSelectedCategory(nameCategorySelected)
      .then((data) => {
        setPlatesSelectedCategoryRestaurant(data)
      })
      .catch((err) => console.log(err))
  }, [nameCategorySelected, setPlatesSelectedCategoryRestaurant]);


}
