import { useContext } from 'react';
import { OrderContext } from '../../context/order';
import styles from './Modal.module.css'

const Modal = () => {

  const { modalRequestFood, setModalRequestFood } = useContext(OrderContext)

  const onClickOutModal = () => {
    setModalRequestFood({
      ...modalRequestFood,
      state: false,
      title: ""
    })
  }

  return (
    <div className={styles.containerModal} onClick={onClickOutModal}>
      <div className={styles.modal}>
{/*         <p>{modalRequestFood.title}</p> */}
      </div>
    </div>
  )
};

export default Modal;