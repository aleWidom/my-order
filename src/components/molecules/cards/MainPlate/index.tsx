import { FC, useContext } from "react";
import { OrderContext } from "../../../../context";
import styles from "./MainPlate.module.scss";

interface Props {
  header: string;
  price: string;
  source: string;
  description: string;
  id: number;
}

export const MainPlate: FC<Props> = ({
  header,
  price,
  source,
  description,
  id,
}) => {
  const { modalPlate, setModalPlate } = useContext(OrderContext);

  const onClickCardHome = () => {
    setModalPlate({
      ...modalPlate,
      id: id,
      state: true,
      title: header,
      price: price,
      description: description,
      photo: source
    });
  };

  return (
    <div className={styles.container} onClick={onClickCardHome}>
      <img src={source} className={styles.img} alt={source} />
      <h5 className={styles.title}>{header}</h5>
    </div>
  );
};