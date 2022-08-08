import { WelcomeElements } from "./WelcomeElements";
import { TableProvider } from "../../context/tables"
import { InputProvider } from "../../context/input";

import styles from './WelcomePage.module.css'

const WelcomePage = () => {

  return (
    <TableProvider>
      <div className={styles.welcome}>
        <h3 className={styles.header}>Bienvenidos...</h3>
        <InputProvider>
          <WelcomeElements />
        </InputProvider>
      </div>
    </TableProvider>
  )
};

export default WelcomePage;



