import Brand from "../Brand/Brand"
import BeatLoader from "react-spinners/BeatLoader";
import styles from './Loading.module.css'

const Loading = () => {
  return (
    <div className={styles.containerLoading}>
      <Brand />
      <BeatLoader size={10} color={'#fe0000'} margin={10} />
    </div>
  )
}

export default Loading