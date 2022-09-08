
import { useState} from 'react';
import Loading from '../../components/Loading/Loading';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import CardsCategories from '../../components/CardsCategories/CardsCategories'
import CardsHome from '../../components/CardsHome/CardsHome';

import { InputProvider } from '../../context/input';

import styles from "./HomePage.module.css"
import Footer from '../../components/Footer/Footer';


const HomePage = () => {

  const [loading, setLoading] = useState(false) //TODO PASARLO A TRUE

  return (
    <>
      {loading ?
        <div className={styles.mainContainerLoading}>
          <Loading />
        </div> :
        <div  className={styles.mainContainerHome}>
          <Header />
          <InputProvider>
            <Input />
          </InputProvider>
          <CardsCategories />
          <div className={styles.cardsMostPopular}>
            <CardsHome title={'Platos más solicitados.'} />
          </div>
          <div className={styles.suggestions}>
            <CardsHome title={'Sugerencias del cheff.'} />
          </div>
          <div className={styles.daysPlates}>
            <CardsHome title={'Platos del día.'} />
          </div>
          <div className={styles.footer}>
          <Footer/>
          </div>
        </div>}
    </>
  )
};

export default HomePage;
