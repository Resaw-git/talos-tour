import styles from "./arrow.module.css";
import SVG from "#assets/icons/arrow.svg";
import { FC } from "react";

type ArrowType = {
  direction: "left" | "right";
  onClick?: () => void
};

export const Arrow: FC<ArrowType> = ({ direction = "right", onClick }) => {
  return (
    <div className={styles.arrow} onClick={onClick}>
      <div className={styles[direction]}>
        <SVG />
      </div>
    </div>
  );
};
