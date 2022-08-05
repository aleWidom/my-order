import { WelcomeElements } from "./WelcomeElements";
import { TableProvider } from "../../context/tables"

import styles from './WelcomePage.module.css'
import { InputProvider } from "../../context/input";

const WelcomePage = () => {

  return (
    <TableProvider>
      <InputProvider>
        <div className={styles.welcome}>
          <h3 className={styles.header}>Bienvenidos...</h3>
          <WelcomeElements />
        </div>
      </InputProvider>
    </TableProvider>
  )
};

export default WelcomePage;



