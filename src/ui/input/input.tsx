import styles from "./input.module.css";
import { FC, InputHTMLAttributes } from "react";
import InputMask from "react-input-mask";

type InputType = InputHTMLAttributes<HTMLInputElement> & {
  isError?: boolean;
  errorText?: string;
  label: string;
  style: "light" | "dark";
  type: "tel" | "text";
};

export const Input: FC<InputType> = ({ isError, style, type, label, ...props }) => {
  const tel = () => (
    <InputMask
      {...props}
      mask="+7 (999) 999-99-99"
      className={`${style === "light" ? styles.input : styles.input_dark} ${isError && styles.errorBorder}`}
      required={true}
    />
  );

  const text = () => (
    <input
      {...props}
      className={`${style === "light" ? styles.input : styles.input_dark} ${isError && styles.errorBorder}`}
      required={true}
    />
  );

  return (
    <div className={styles.box}>
      {type === "tel" ? tel() : text()}
      <span className={`${styles.placeholder} ${isError && styles.errorText}`}>{label}</span>
      {isError && <span className={styles.error}>Это поле обязательно для заполнения</span>}
    </div>
  );
};
