import { useEffect } from "react";
import {getItemsCardsDayPlates} from "../services";

export const  useFetchCardsDayPlates = (setCardsHome, setLoading) => {
  useEffect(() => {
    getItemsCardsDayPlates()
    .then(({data})=> {
      setCardsHome(data)
      setLoading(false)
    })
  }, [setCardsHome, setLoading]);
}
