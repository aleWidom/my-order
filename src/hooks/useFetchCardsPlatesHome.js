import { useEffect } from "react";
import { getItemsCardsHome } from "../services";

export const useFetchCardsPlatesHome = (setCardsHome) => {
  useEffect(() => {
    getItemsCardsHome()
    .then((data)=> {
      setCardsHome(data)
    })
  }, [setCardsHome]);
}
