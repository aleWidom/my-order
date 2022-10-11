import styles from "./Categorie.module.css";

export const Categorie = ({ description, handleClick, state }) => {
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
