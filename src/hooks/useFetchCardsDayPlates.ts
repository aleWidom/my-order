import { useEffect, useContext } from "react";
import { OrderContext } from "../context";
import { getItemsCardsDayPlates } from "../services";

export const useFetchCardsDayPlates = () => {
  const { setCardsDayPlates, setLoading } = useContext(OrderContext);

  //TODO ARREGLAR ANYS EN DATA
  useEffect(() => {
    getItemsCardsDayPlates().then(({ data }: any) => {
      setCardsDayPlates(data);
      setLoading(false);
    });
  }, [setCardsDayPlates, setLoading]);
};
