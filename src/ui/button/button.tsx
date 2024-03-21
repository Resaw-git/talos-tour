import styles from "./button.module.css";
import { ButtonHTMLAttributes, FC, MouseEventHandler, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  style: "light" | "dark";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button: FC<ButtonProps> = ({ children, style , onClick}) => {
  return <button onClick={onClick} className={`${style === "light" ? styles.button : styles.button_dark}`}>{children}</button>;
};
