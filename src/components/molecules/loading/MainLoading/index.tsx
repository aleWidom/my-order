import { MainBrand } from "../../../atoms";
import BeatLoader from "react-spinners/BeatLoader";
import styles from './MainLoading.module.scss'

export const MainLoading = () => {
  return (
    <div className={styles.containerLoading}>
      <MainBrand />
      <BeatLoader size={10} color={'#fe0000'} margin={10} />
    </div>
  )
}

