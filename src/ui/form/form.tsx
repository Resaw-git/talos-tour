import styles from "./form.module.css";
import { Button } from "#ui/button/button";
import { Input } from "#ui/form/input/input";
import { Checkbox } from "#ui/form/checkbox/checkbox";

export const Form = () => {
  return (
    <form className={styles.form}>
      <div className={styles.inputs}>
        <Input name="name" placeholder="Ваше имя" />
        <Input name="phone" placeholder="Ваш номер телефона" isError={true} errorText="Это поле обязательное для заполнения"/>
        <Input name="comment" placeholder="Ваш комментарий" />
      </div>
      <Button type="submit" className={styles.button}>Оставить заявку</Button>
      <div className={styles.checkbox}>
        <Checkbox id="policy" name="policy"/>
        <label htmlFor="policy" className={styles.policy}>
          Я подтверждаю своё согласие на обработку персональных данных и соглашаюсь с политикой конфиденциальности
        </label>
      </div>
    </form>
  );
};
