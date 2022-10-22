import { useEffect } from "react";
import {getItemsCardsDayPlates} from "../services";

export const  useFetchCardsDayPlates = (setCardsDayPlates, setLoading) => {
  useEffect(() => {
    getItemsCardsDayPlates()
    .then(({data})=> {
      setCardsDayPlates(data)
      setLoading(false)
    })
  }, [setCardsDayPlates, setLoading]);
}
