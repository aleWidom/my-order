import { useContext, useEffect } from "react";
import { OrderContext } from "../context/order";
import { getItemsAccordingToSelectedCategory } from "../services";

export const useFetchPlates = (nameCategorySelected) => {

    const {setPlatesSelectedCategory} = useContext(OrderContext)

    useEffect(() => {
        getItemsAccordingToSelectedCategory(nameCategorySelected)
          .then((data) => {
            setPlatesSelectedCategory(data)
          })
          .catch((err) => console.log(err))
      }, [nameCategorySelected]);
     
      
}
