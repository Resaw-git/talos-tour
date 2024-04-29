import styles from "./checkbox.module.css";
import { FC, InputHTMLAttributes } from "react";

type CheckboxPropsType = InputHTMLAttributes<HTMLInputElement> & {
  style: "light" | "dark";
  isError: boolean;
};

export const Checkbox: FC<CheckboxPropsType> = ({ style, isError, ...props }) => {
  const randNum = Math.floor(Math.random() * 10);

  return (
    <>
      <div className={styles.checkbox}>
        <label className={styles.label}>
          <input type="checkbox" id={"policy" + randNum} className={styles.real_checkbox} {...props} />
          <span className={`${style === "light" ? styles.light_checkbox : styles.dark_checkbox}`} />
        </label>

        <label htmlFor={"policy" + randNum} className={styles.policy}>
          Я подтверждаю своё согласие на обработку персональных данных и соглашаюсь с политикой конфиденциальности
        </label>
      </div>
      {isError && <div className={styles.error_wrap}>
        <span className={styles.error_text}>Пожалуйста, подтвердите ваше согласие на обработку персональных данных, это необходимо для отправки заявки</span>
        </div>}
    </>
  );
};
