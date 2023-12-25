import styles from "./input.module.css";
import { FC, InputHTMLAttributes } from "react";

type InputType = InputHTMLAttributes<HTMLInputElement> & {
  isError?: boolean;
  errorText?: string
}

export const Input:FC <InputType> = (props) => {
  return (
    <div className={styles.box}>
      <input {...props} className={`${styles.input} ${props.isError && styles.errorBorder}`} type={"text"} required={true} />
      <span className={`${styles.placeholder} ${props.isError && styles.errorText}`}>
        {props.placeholder}
      </span>
      {props.isError && <span className={styles.error}>{props.errorText}</span>}
    </div>
  );
};
