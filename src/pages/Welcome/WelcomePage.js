import { WelcomeElements } from "./WelcomeElements";
import { InputProvider } from "../../context/input";

import styles from './WelcomePage.module.css'

const WelcomePage = () => {

  return (
    <div className={styles.welcome}>
      <div className={styles.welcomeCard}>
        <h3 className={styles.header}>Bienvenidos...</h3>
        <InputProvider>
          <WelcomeElements />
        </InputProvider>
      </div>
    </div>
  )
};

export default WelcomePage;



