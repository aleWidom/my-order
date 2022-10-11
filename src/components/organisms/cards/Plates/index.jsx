import { useContext } from "react";
import {SearchContext } from "../../../../context";
import { Plate } from "../../../molecules";

export const Plates = ({setLoading}) => {

  const {
    results
  } = useContext(SearchContext);

 
  return (
    <>
      {results.map((e) => {
        return (
          <Plate
            header={e.title}
            source={e.photo}
            description={e.description}
            price={e.price}
            key={e.id}
          />
        );
      })}
    </>
  );
};
