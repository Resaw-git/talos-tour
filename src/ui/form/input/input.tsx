import styles from "./input.module.css";
import { FC, InputHTMLAttributes } from "react";
import InputMask from "react-input-mask";

type InputType = InputHTMLAttributes<HTMLInputElement> & {
  isError?: boolean;
  errorText?: string;
  style: "light" | "dark";
  type: "tel" | "text";
};

export const Input: FC<InputType> = ({ isError, style, type, ...props }) => {
  const tel = () => (
    <InputMask
      {...props}
      mask="+7 (999) 999-99-99"
      placeholder="+7 (___) ___-__-__"
      className={`${style === "light" ? styles.input : styles.input_dark} ${isError && styles.errorBorder}`}
      required={true}
    />
  );

  const text = () => (
    <input
        {...props}
        placeholder=""
        className={`${style === "light" ? styles.input : styles.input_dark} ${isError && styles.errorBorder}`}
        required={true}
      />
  )

  return (
    <div className={styles.box}>
      {type === "tel" ? tel() : text()}
      <span className={`${styles.placeholder} ${isError && styles.errorText}`}>{props.placeholder}</span>
      {isError && <span className={styles.error}>Это поле обязательно для заполнения</span>}
    </div>
  );
};
