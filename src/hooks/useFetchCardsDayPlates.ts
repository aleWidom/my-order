import { useEffect, useContext } from "react";
import { OrderContext } from "../context";
import { getItemsCardsDayPlates } from "../services";

export const useFetchCardsDayPlates = () => {
  const { setCardsDayPlates} = useContext(OrderContext);


  //TODO ARREGLAR ANYS EN DATA
  useEffect(() => {
    getItemsCardsDayPlates().then(({ data }: any) => {
      setCardsDayPlates(data);
    });
  }, [setCardsDayPlates]);
};
