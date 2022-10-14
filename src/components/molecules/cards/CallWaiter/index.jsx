import {Waiter} from '../../../atoms'
import styles from './CallWaiter.module.css'

export const CallWaiter = () => {
  return (
    <div className={styles.containerCallWaiter}>
      <Waiter/>
      <button className={styles.button}>Llamar a moza/o a la mesa</button>
      <button className={styles.button}>Pedir la cuenta</button>
    </div>
  )
}
