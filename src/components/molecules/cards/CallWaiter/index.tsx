
import styles from './CallWaiter.module.css'

export const CallWaiter = () => {
  return (
    <div className={styles.containerCallWaiter}>
      <button className={styles.buttonCall}>Llamar a moza/o a la mesa</button>
      <button className={styles.buttonCheck}>Pedir la cuenta</button>
    </div>
  )
}
