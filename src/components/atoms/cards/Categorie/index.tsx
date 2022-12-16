import { FC } from "react";
import styles from "./Categorie.module.scss";

interface Props {
  description: string;
  handleClick: () => void;
  state: string;
}

export const Categorie: FC<Props> = ({ description, handleClick, state }) => {
  return (
    <div
      onClick={handleClick}
      className={state === "selected" ? styles.selected : styles.notSelected}
    >
      <p
        className={
          state === "selected" ? styles.linkSelected : styles.linkNotSelected
        }
      >
        {description}
      </p>
    </div>
  );
};
