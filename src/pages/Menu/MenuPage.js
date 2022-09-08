
import { useState } from 'react';
import Loading from '../../components/Loading/Loading';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
import HeaderImgCategorieSelected from '../../components/HeaderImgCategorieSelected/HeaderImgCategorieSelected';
import CardsCategories from '../../components/CardsCategories/CardsCategories'
import CardsMenu from '../../components/CardsMenu/CardsMenu'
import { InputProvider } from '../../context/input';

import styles from "./MenuPage.module.css"

const MenuPage = () => {

    const [loading, setLoading] = useState(false) //TODO PASARLO A TRUE una vez que lo tenga más claro cuando y donde debe cargar


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
                    <InputProvider>
                        <Input />
                    </InputProvider>
                    <CardsCategories />
                    <HeaderImgCategorieSelected />
                    <CardsMenu />
                    <div className={styles.footer}>
                        <Footer />
                    </div>
                </div>}
        </>
    )
};

export default MenuPage;
