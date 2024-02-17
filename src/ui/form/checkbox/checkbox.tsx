import styles from "./checkbox.module.css";
import { FC, InputHTMLAttributes } from "react";

type CheckboxPropsType = InputHTMLAttributes<HTMLInputElement> & {
  style: "light" | "dark"
}

export const Checkbox:FC<CheckboxPropsType> = ({style, ...props}) => {

  return (
    <label className={styles.label}>
      <input
        type="checkbox"
        className={styles.real_checkbox}
        {...props}
      />
      <span className={`${style === "light" ? styles.light_checkbox : styles.dark_checkbox}`} />
    </label>
  );
};
