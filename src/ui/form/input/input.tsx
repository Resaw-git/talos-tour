import styles from "./input.module.css";
import { FC, InputHTMLAttributes } from "react";

type InputType = InputHTMLAttributes<HTMLInputElement> & {
  isError?: boolean;
  errorText?: string;
  style: "light" | "dark"
}

export const Input:FC <InputType> = ({isError, errorText, style, ...props}) => {


  return (
    <div className={styles.box}>
      <input {...props} className={`${style === "light" ? styles.input : styles.input_dark} ${isError && styles.errorBorder}`} placeholder="" type={"text"} required={true} />
      <span className={`${styles.placeholder} ${isError && styles.errorText}`}>
        {props.placeholder}
      </span>
      {isError && <span className={styles.error}>{errorText}</span>}
    </div>
  );
};
