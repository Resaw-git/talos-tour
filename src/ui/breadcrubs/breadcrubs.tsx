import { Link } from "react-router-dom";
import styles from "./breadcrubs.module.css";
import { FC } from "react";

export const Breadcrubs: FC<{ current: string }> = ({ current }) => {
  return (
    <div className={styles.breadcrubs}>
      <Link to="/">Главная</Link>
      <span>&gt;</span>
      <span>{current}</span>
    </div>
  );
};
