import { useContext } from 'react'
import { OrderContext } from '../../../../context'
import { Closed } from '../../../atoms'
import styles from './ModalPlate.module.css'

export const ModalPlate = () => {

  const { modalPlate, setModalPlate } = useContext(OrderContext)

  const closedModalPlate = () => {
    setModalPlate({
      state: false,
      title: "",
      price: 0,
      img: "",
      description: "",
    })
  }

  const handleClickRequest = () => {
    setModalPlate({
      state: false,
      title: "",
      price: 0,
      img: "",
      description: "",
    })
  }
  
  return (
    <div className={styles.containerModalPlate}>
      <div className={styles.modalPlate} >
      <button  onClick={closedModalPlate} className={styles.buttonClosedModal}><Closed/></button>
        <h2  className={styles.title} >{modalPlate.title}</h2>
        <img alt={modalPlate.img} className={styles.img} src={modalPlate.img} />
        <p className={styles.description}>{modalPlate.description}</p>
        <p className={styles.price}>${modalPlate.price}</p>
   {/*      <p>Cantidad</p> */}
        {/*   <p>Personalizar Ingredientes</p> */}
        <button onClick={handleClickRequest} className={styles.request}>Solicitar</button>
      </div>
    </div>
  )
}
