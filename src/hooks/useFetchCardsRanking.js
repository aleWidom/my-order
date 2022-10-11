import { useEffect } from "react";
import { getItemsCardsRanking } from "../services";

export const useFetchCardsRankingPlates = (setCardsRankingPlates) => {
  useEffect(() => {
    getItemsCardsRanking()
    .then(({data})=> {
      setCardsRankingPlates(data)
    })
  }, [setCardsRankingPlates]);
}
