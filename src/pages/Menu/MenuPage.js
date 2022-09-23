
import { useState, useContext } from 'react';
import { InputContext } from '../../context/input';
import { OrderContext } from '../../context/order';
import { useFetchPlates } from '../../hooks';
import Loading from '../../components/Loading/Loading';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
import CallWaiterList from '../../components/CallWaiterList/CallWaiterList';
import HeaderImgCategorieSelected from '../../components/HeaderImgCategorieSelected/HeaderImgCategorieSelected';
import CardsCategories from '../../components/CardsCategories/CardsCategories'
import CardsMenu from '../../components/CardsMenu/CardsMenu'
import Results from '../../components/Results/Results';

import styles from "./MenuPage.module.css"

const MenuPage = () => {

    const [loading, setLoading] = useState(true) //TODO PASARLO A TRUE una vez que lo tenga más claro cuando y donde debe cargar

    const { resultsSearched} = useContext(InputContext)

    const { menuWaiterActive, nameCategorySelected, setPlatesSelectedCategoryRestaurant } = useContext(OrderContext)

    useFetchPlates(nameCategorySelected, setPlatesSelectedCategoryRestaurant, setLoading)

    return (
        <>
            {loading ?
                <div className={styles.mainContainerLoading}>
                    <Loading />
                </div> :
                <div className={styles.mainContainerMenu}>
                    <Header />
                    {menuWaiterActive ? <CallWaiterList/> : ""}
                    <Input />
                    <CardsCategories />
                    <HeaderImgCategorieSelected />
                    {resultsSearched.length === 0 ?
                        <div className={styles.cardsMenuContainer}>
                            <CardsMenu  setLoading={setLoading}/>
                        </div> :
                        <div className={styles.resultsContainer}>
                            <Results />
                        </div>}
                    <div className={styles.footerContainer}>
                        <Footer />
                    </div>
                </div>}
        </>
    )
};

export default MenuPage;
