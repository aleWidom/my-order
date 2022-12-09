import { useState } from "react";
import { OrderContext } from ".";
import { Plate, ModalPlate, CategoryRestaurant } from "../../interfaces";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const OrderProvider = ({ children }: Props) => {
  const [categoriesMenuRestaurant, setCategoriesMenuRestaurant] = useState<
    CategoryRestaurant[]
  >([]);

  const [cardsRankingPlates, setCardsRankingPlates] = useState<Plate[]>([]);

  const [cardsDayPlates, setCardsDayPlates] = useState<Plate[]>([]);

  const [menuWaiterActive, setMenuWaiterActive] = useState<boolean>(false);

  const [modalPlate, setModalPlate] = useState<ModalPlate>({
    id: 0,
    state: false,
    title: "",
    price: "0",
    description: "",
    quantity: 1,
  });

  const [cart, setCart] = useState<Plate[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  /*  const [modalRequest, setModalRequest] = useState({
        state: false
    })
 */

  return (
    <OrderContext.Provider
      value={{
        categoriesMenuRestaurant,
        setCategoriesMenuRestaurant,
        cardsRankingPlates,
        setCardsRankingPlates,
        cardsDayPlates,
        setCardsDayPlates,
        menuWaiterActive,
        setMenuWaiterActive,
        modalPlate,
        setModalPlate,
        cart,
        setCart,
        loading,
        setLoading,
        /*   modalRequest, 
            setModalRequest */
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
