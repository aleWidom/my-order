import { useEffect } from "react";
import { getItemsCardsRanking } from "../services";

export const useFetchCardsRankingPlates = (setCardsRankingPlates, setLoading) => {
  useEffect(() => {
    getItemsCardsRanking()
      .then(({ data }) => {
        setCardsRankingPlates(data)
        setLoading(false)
      })
  }, [setCardsRankingPlates, setLoading]);
}
