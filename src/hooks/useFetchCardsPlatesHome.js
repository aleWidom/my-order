import { useEffect } from "react";
import { getItemsCardsHome } from "../services";

export const useFetchCardsPlatesHome = (setCardsHome, setLoading) => {
  useEffect(() => {
    getItemsCardsHome()
    .then((data)=> {
      setCardsHome(data)
      setLoading(false)
    })
  }, [setCardsHome]);
}
