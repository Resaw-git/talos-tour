import styles from "./checkbox.module.css";
import { FC, InputHTMLAttributes } from "react";

type CheckboxPropsType = InputHTMLAttributes<HTMLInputElement>

export const Checkbox:FC<CheckboxPropsType> = (props) => {

  return (
    <label className={styles.label}>
      <input
        type="checkbox"
        className={styles.real_checkbox}
        {...props}
      />
      <span className={styles.custom_checkbox} />
    </label>
  );
};
