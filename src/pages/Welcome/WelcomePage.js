import { WelcomeElements } from "./WelcomeElements";
import { TableProvider } from "../../context/tables"

import styles from './WelcomePage.module.css'

const WelcomePage = () => {

  return (
    <TableProvider>
      <div className={styles.welcome}>
        <h3 className={styles.header}>Bienvenidos...</h3>
        <WelcomeElements />
      </div>
    </TableProvider>
  )
};

export default WelcomePage;



