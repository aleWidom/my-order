import { useContext, useEffect } from "react";
import { OrderContext } from "../context";
import { getAllCategoriesIdRestaurant1 } from "../services/items";

export const useFetchCategories = () => {
  const { setCategoriesMenuRestaurant } = useContext(OrderContext);

  useEffect(() => {
    getAllCategoriesIdRestaurant1()
      .then((data) => {
        setCategoriesMenuRestaurant(data);
      })
      .catch((err) => console.log(err));
  }, [setCategoriesMenuRestaurant]);
};
