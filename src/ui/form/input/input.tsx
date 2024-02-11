import styles from "./input.module.css";
import { FC, InputHTMLAttributes } from "react";

type InputType = InputHTMLAttributes<HTMLInputElement> & {
  isError?: boolean;
  errorText?: string;
}

export const Input:FC <InputType> = ({isError, errorText, ...props}) => {
  return (
    <div className={styles.box}>
      <input {...props} className={`${styles.input} ${isError && styles.errorBorder}`} placeholder="" type={"text"} required={true} />
      <span className={`${styles.placeholder} ${isError && styles.errorText}`}>
        {props.placeholder}
      </span>
      {isError && <span className={styles.error}>{errorText}</span>}
    </div>
  );
};
