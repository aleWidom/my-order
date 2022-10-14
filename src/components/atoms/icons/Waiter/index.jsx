import { useContext } from 'react'
import { OrderContext } from '../../../../context/order'
import bow from '../../../../images/bow.svg'
import styles from './Waiter.module.css'


export const Waiter = () => {

  const {menuWaiterActive, setMenuWaiterActive}= useContext(OrderContext)

  const handleClickWaiterIcon = () => {
    setMenuWaiterActive(!menuWaiterActive)
  }

  return (
        <img src={bow} alt={'bow'} onClick={handleClickWaiterIcon} className={styles.waiter}/>
  )
}

