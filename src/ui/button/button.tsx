import styles from "./button.module.css";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  style: "light" | "dark"
};

export const Button: FC<ButtonProps> = ({ children, style }) => {
  return <button className={`${style === "light" ? styles.button : styles.button_dark}`}>{children}</button>;
};
