import { useEffect } from "react";
import { getItemsAccordingToSelectedCategory } from "../services";

export const useFetchPlates = (nameCategorySelected, setPlatesSelectedCategoryRestaurant,  setLoading ) => {
  useEffect(() => {
    getItemsAccordingToSelectedCategory(nameCategorySelected)
      .then((data) => {
        setPlatesSelectedCategoryRestaurant(data)
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }, [nameCategorySelected, setPlatesSelectedCategoryRestaurant, setLoading]);
}
