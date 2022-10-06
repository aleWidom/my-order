
/* import { useState, useContext } from 'react';
import { SearchContext } from '../../context/search';
import { OrderContext } from '../../context/order';
import { useFetchPlates } from '../../hooks';
import Loading from '../../components/Loading/Loading';
import Modal from '../../components/Modal/Modal';
import Search from '../../components/Search/Search';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
import CallWaiterList from '../../components/CallWaiterList/CallWaiterList';
import HeaderImgCategorieSelected from '../../components/HeaderImgCategorieSelected/HeaderImgCategorieSelected';
import CardsCategories from '../../components/CardsCategories/CardsCategories'
import CardsMenu from '../../components/CardsMenu/CardsMenu'
import Results from '../../components/Results/Results';


import styles from "./MenuPage.module.css" */
import { useState, useContext } from 'react';
import { OrderContext, SearchContext } from '../../context';
import { useFetchPlates } from '../../hooks';
import { Categories, FormSearch, MainLoading } from '../../components/molecules'
import { Foods, Navbar} from '../../components/organisms'
import styles from "./MenuPage.module.css"


const MenuPage = () => {

    const [loading, setLoading] = useState(true)

    const { resultsSearched } = useContext(SearchContext)

    const { menuWaiterActive, nameCategorySelected, setPlatesSelectedCategoryRestaurant, modalRequestFood } = useContext(OrderContext)

    useFetchPlates(nameCategorySelected, setPlatesSelectedCategoryRestaurant, setLoading)

    return (
        <>
            {loading ?
                <div className={styles.mainContainerLoading}>
                    <MainLoading />
                </div> :
                <div className={styles.mainContainerMenu}>
                    <Navbar />
                    {/* {menuWaiterActive ? <CallWaiterList /> : ""} */}
                    <FormSearch />
                    <Categories />
                    <Foods/>
                    {/*   {modalRequestFood.state ? <Modal/> : ""} */}
                    {/*     <HeaderImgCategorieSelected /> */}
                    {/*  {resultsSearched.length === 0 ?
                        <div className={styles.cardsMenuContainer}>
                            <CardsMenu  setLoading={setLoading}/>
                        </div> :
                        <div className={styles.resultsContainer}>
                            <Results />
                        </div>} */}
                    {/* <div className={styles.footerContainer}>
                        <Footer />
                    </div> */}
                </div>}
        </>
    )
};

export default MenuPage;
