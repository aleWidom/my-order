import { useEffect } from "react";
import { getItemsCardsRanking } from "../services";

export const useFetchCardsRanking = (setCardsHome, setLoading) => {
  useEffect(() => {
    getItemsCardsRanking()
    .then(({data})=> {
      setCardsHome(data)
      setLoading(false)
    })
  }, [setCardsHome]);
}
