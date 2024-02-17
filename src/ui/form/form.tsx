import styles from "./form.module.css";
import { Button } from "../button/button";
import { Input } from "./input/input";
import { Checkbox } from "./checkbox/checkbox";
import { FC } from "react";

type FormProps = {
  style: "light" | "dark"
}

export const Form:FC<FormProps> = ({style }) => {

  return (
    <form className={styles.form}>
      <div className={styles.inputs}>
        <Input name="name" placeholder="Ваше имя" style={style}/>
        <Input name="phone" placeholder="Ваш номер телефона" style={style} isError={true} errorText="Это поле обязательное для заполнения"/>
        <Input name="comment" placeholder="Ваш комментарий" style={style} />
      </div>
      <Button type="submit" className={styles.button} style={style}>Оставить заявку</Button>
      <div className={styles.checkbox}>
        <Checkbox id="policy" name="policy" style={style}/>
        <label htmlFor="policy" className={styles.policy}>
          Я подтверждаю своё согласие на обработку персональных данных и соглашаюсь с политикой конфиденциальности
        </label>
      </div>
    </form>
  );
};
