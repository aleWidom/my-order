
import { useState, useContext } from 'react';
import { InputContext } from '../../context/input';
import Loading from '../../components/Loading/Loading';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
import HeaderImgCategorieSelected from '../../components/HeaderImgCategorieSelected/HeaderImgCategorieSelected';
import CardsCategories from '../../components/CardsCategories/CardsCategories'
import CardsMenu from '../../components/CardsMenu/CardsMenu'
import Results from '../../components/Results/Results';

import styles from "./MenuPage.module.css"

const MenuPage = () => {

    const [loading, setLoading] = useState(false) //TODO PASARLO A TRUE una vez que lo tenga más claro cuando y donde debe cargar

    const { wordSearched } = useContext(InputContext)

    setTimeout(() => {
        setLoading(false)
    }, 4000);

    return (
        <>
            {loading ?
                <div className={styles.mainContainerLoading}>
                    <Loading />
                </div> :
                <div className={styles.mainContainerMenu}>
                    <Header />
                    <Input />
                    <CardsCategories />
                    <HeaderImgCategorieSelected />
                    {wordSearched === '' ?
                        <div className={styles.cardsMenuContainer}>
                            <CardsMenu />
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
