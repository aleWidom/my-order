import { useEffect } from "react";
import { getItemsCardsHome } from "../services";

export const useFetchCardsPlatesHome = (title,setPlatesSelectedCategoryRestaurant) => {
  useEffect(() => {
    getItemsCardsHome(title)
      .then((data) => {
        setPlatesSelectedCategoryRestaurant(data)
      })
      .catch((err) => console.log(err))
  }, []);
}
