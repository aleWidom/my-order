
import { useContext } from 'react';
import { OrderContext } from '../../context/order';
import { TableContext } from '../../context/tables';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CardCategorie from "../CardCategories/CardCategorie";
import styles from "./CardsCategories.module.css"

const CardsCategories = () => {

  const { nameCategorySelected, setNameCategorySelected, categoriesMenuRestaurant } = useContext(OrderContext)

  const { table } = useContext(TableContext)

  const handleClickCategory = (cardSelected) => () => {
    setNameCategorySelected(cardSelected.name)
  }

  return (
    <>
      <div className={styles.header}>
        <Swiper spaceBetween={50}
          slidesPerView={3}>
          {categoriesMenuRestaurant.map((e) => (
            <SwiperSlide key={e.id}>
              {e.name === nameCategorySelected ?
                <Link to={`/table/${table.table_number}/menu`} className={styles.categories}>
                  <CardCategorie handleClick={handleClickCategory(e)} description={e.name} />
                </Link>
                :
                <Link to={`/table/${table.table_number}/menu`} className={styles.categoriesNotSelected}>
                  <CardCategorie handleClick={handleClickCategory(e)} description={e.name} />
                </Link>
              }
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
};

export default CardsCategories;
