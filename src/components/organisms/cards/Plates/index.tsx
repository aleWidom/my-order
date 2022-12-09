import { useContext } from "react";
import { SearchContext } from "../../../../context";
import { Plate } from "../../../molecules";

export const Plates = () => {
  const { results } = useContext(SearchContext);

  return (
    <>
      {results.map((e) => {
        return (
          <Plate
            id={e.id}
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
