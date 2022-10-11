import { useContext } from "react";
import { OrderContext } from "../../../../context";
import { useFetchPlates } from "../../../../hooks";
import { Food } from "../../../molecules";

export const Foods = () => {
  const {
    nameCategorySelected,
    platesSelectedCategoryRestaurant,
    setPlatesSelectedCategoryRestaurant,
    setLoading,
  } = useContext(OrderContext);

  useFetchPlates(
    nameCategorySelected,
    setPlatesSelectedCategoryRestaurant,
    setLoading
  );

  return (
    <>
      {platesSelectedCategoryRestaurant.map((e) => {
        return (
          <Food
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
