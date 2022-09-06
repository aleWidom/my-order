
import { useState, useContext } from 'react';
import Loading from '../../components/Loading/Loading';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import HeaderImgCategorieSelected from '../../components/HeaderImgCategorieSelected/HeaderImgCategorieSelected';
import CardsCategories from '../../components/CardsCategories/CardsCategories'
import CardsMenu from '../../components/CardsMenu/CardsMenu'

import { useFetchCategories, useFetchPlates } from "../../hooks";
import { InputProvider } from '../../context/input';
import { OrderContext } from '../../context/order';
import styles from "./MenuPage.module.css"

const MenuPage = () => {

    const [loading, setLoading] = useState(true)

    const { /* cart ,*/ nameCategorySelected, setCategoriesMenuRestaurant, setPlatesSelectedCategoryRestaurant } = useContext(OrderContext)


    setTimeout(() => {
        setLoading(false)
    }, 4000);

    useFetchCategories(setCategoriesMenuRestaurant)

    useFetchPlates(nameCategorySelected, setPlatesSelectedCategoryRestaurant)

    return (
        <>
            {loading ?
                <div className={styles.mainContainerLoading}>
                    <Loading />
                </div> :
                <div className={styles.mainContainerMenu}>
                    <Header />
                    <InputProvider>
                        <Input />
                    </InputProvider>
                    <CardsCategories />
                    <HeaderImgCategorieSelected />
                    <CardsMenu />
                    {/*   <div className={styles.footer}>
            <Footer/>
            </div> */}
                </div>}
        </>
    )
};

export default MenuPage;
