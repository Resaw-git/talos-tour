import styles from "./form.module.css";
import { Button } from "#ui/button/button";

export const Form = () => {
  return (
    <form className={styles.form}>
      <input type="text" name="name" placeholder="Ваше имя" />
      <input type="tel" name="phone" placeholder="+7 999 999-99-99"/>
      <input type="text" name="comment" placeholder="Ваш комментарий"/>
      <Button type="submit">Оставить заявку</Button>
      <div>
        <input id="policy" name="policy" type="checkbox"/>
        <label htmlFor="policy">
          Я подтверждаю своё согласие на обработку персональных данных и соглашаюсь с политикой конфиденциальности
        </label>
      </div>
    </form>
  );
};
