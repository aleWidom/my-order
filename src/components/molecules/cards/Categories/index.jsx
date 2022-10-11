import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {SearchContext, OrderContext} from "../../../../context";
import "swiper/css";
import { Categorie } from "../../../atoms";
import { useFetchCategories } from "../../../../hooks";
import { getItemsAccordingToSelectedCategory } from "../../../../services";
import styles from "./Categories.module.css";

export const Categories = () => {
  const {
    categoriesMenuRestaurant,
    setCategoriesMenuRestaurant,
  } = useContext(OrderContext);

  const {nameCategorySelected, setValueInput, setNameCategorySelected, setResults} = useContext(SearchContext)



  const handleClickCategory = (cardSelected) => () => {
    getItemsAccordingToSelectedCategory(cardSelected.name)
    .then((data) => {
      setNameCategorySelected(cardSelected.name)
      setResults(data)
      setValueInput("")
    })
    .catch((err) => console.log(err))
  };

  useFetchCategories(setCategoriesMenuRestaurant);

  return (
    <>
      <div className={styles.containerCategories}>
        <Swiper spaceBetween={50} slidesPerView={3}>
          {categoriesMenuRestaurant.map((e) => (
            <SwiperSlide key={e.id}>
              {e.name === nameCategorySelected ? (
                <Categorie
                  handleClick={handleClickCategory(e)}
                  description={e.name}
                  state={"selected"}
                />
              ) : (
                <Categorie
                  handleClick={handleClickCategory(e)}
                  description={e.name}
                  state={"notSelected"}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
