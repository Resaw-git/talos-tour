import styles from "./form.module.css";
import { Button } from "../button/button";
import { Input } from "./input/input";
import { Checkbox } from "./checkbox/checkbox";
import { FC, SyntheticEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { openModal } from "../../redux/slices/modal-slice";
import { setSubmit, setSuccess, setLoading } from "../../redux/slices/submit-slice";
import Arrow from "../../assets/icons/arrow.svg";
import { prevQ } from "../../redux/slices/quiz-slice";

type FormProps = {
  style: "light" | "dark";
  isQuiz?: boolean;
};

export const Form: FC<FormProps> = ({ style, isQuiz }) => {
  const randNum = Math.floor(Math.random() * 10);
  const dispatch = useAppDispatch();
  const { country, dates, persons, stars, nutrition } = useAppSelector((state) => state.quiz);
  const submitForm = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(openModal());
    dispatch(setLoading(true));
    dispatch(setSubmit(true));
    const target = event.target as typeof event.target & {
      name: { value: string };
      phone: { value: string | number };
      msg: { value: string };
      policy: { checked: boolean };
    };

    const json = JSON.stringify({
      name: target.name.value,
      phone: target.phone.value,
      msg: target.msg.value,
      policy: target.policy.checked,
      dateArrival: dates.arrival,
      dateReturn: dates.return,
      adults: persons.adults,
      children: persons.children,
      country,
      stars,
      nutrition,
    });

    fetch("mail.php", {
      method: "POST",
      body: json,
    })
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error(`${response.status} ${response.statusText}`);
        }
      })
      .then(() => {
        dispatch(setSuccess(true));
        dispatch(setLoading(false));
      })
      .catch(() => {
        dispatch(setSuccess(false));
        dispatch(setLoading(false));
      });
  };

  return (
    <form className={styles.form} onSubmit={(event) => submitForm(event)}>
      <div className={styles.inputs}>
        <Input name="name" placeholder="Ваше имя" style={style} />
        <Input name="phone" placeholder="Ваш номер телефона" style={style} />
        <Input name="msg" placeholder="Ваш комментарий" style={style} />
      </div>

      {isQuiz ? (
        <div className={styles.group_buttons}>
        <button className={styles.button} onClick={() => dispatch(prevQ())}>
          <span className={styles.arrow_back}>
            <Arrow />
          </span>
          Назад
        </button>
        <button type="submit" className={styles.button}>
          Оставить заявку
        </button>
      </div>

      ) : (
        <Button type="submit" className={styles.button} style={style}>
          Оставить заявку
        </Button>
      )}

      <div className={styles.checkbox}>
        <Checkbox id={"policy" + randNum} name="policy" style={style} />
        <label htmlFor={"policy" + randNum} className={styles.policy}>
          Я подтверждаю своё согласие на обработку персональных данных и соглашаюсь с политикой конфиденциальности
        </label>
      </div>
    </form>
  );
};
