import styles from "./button.module.css";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export const Button: FC<ButtonProps> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};
