import { useEffect } from "react";
import { getItemsCardsRanking } from "../services";

export const useFetchCardsRanking = (setCardsHome) => {
  useEffect(() => {
    getItemsCardsRanking()
    .then(({data})=> {
      setCardsHome(data)
    })
  }, [setCardsHome]);
}
