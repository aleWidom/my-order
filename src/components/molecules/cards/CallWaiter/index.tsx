
import { useContext } from 'react';
import { SearchContext } from '../../../../context';
import styles from './CallWaiter.module.scss'

export const CallWaiter = () => {

  const { setModalInfo } = useContext(SearchContext)

  const handleClick = () => {
    setModalInfo({
      description: "Su moza/o se acercará a su mesa.",
      state: true,
      section: "call"
    })
    setTimeout(() => {
      setModalInfo({
        description: "",
        state: false,
        section: ""
      })
    }, 3000);
  }

  return (
    <div className={styles.containerCallWaiter}>
      <button className={styles.buttonCall} onClick={handleClick}>Llamar a moza/o a la mesa.</button>
    </div>
  )
}
