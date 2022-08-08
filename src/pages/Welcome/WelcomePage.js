import { WelcomeElements } from "./WelcomeElements";
import { InputProvider } from "../../context/input";

import styles from './WelcomePage.module.css'

const WelcomePage = () => {

  return (
      <div className={styles.welcome}>
        <h3 className={styles.header}>Bienvenidos...</h3>
        <InputProvider>
          <WelcomeElements />
        </InputProvider>
      </div>
  )
};

export default WelcomePage;



