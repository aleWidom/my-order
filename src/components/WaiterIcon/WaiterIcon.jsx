import { useContext } from 'react'
import { OrderContext } from '../../context/order'
import bow from '../../images/bow.svg'


const WaiterIcon = () => {

  const {menuWaiterActive, setMenuWaiterActive}= useContext(OrderContext)

  const handleClickWaiterIcon = () => {
    setMenuWaiterActive(!menuWaiterActive)
  }

  console.log(menuWaiterActive)

  return (
      <img src={bow} alt={'bow'} onClick={handleClickWaiterIcon}/>
  )
}

export default WaiterIcon