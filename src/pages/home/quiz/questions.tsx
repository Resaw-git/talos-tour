import styles from "./quiz.module.css";
import { CountrySelect } from "../../../ui/country-select/country-select";
import { nextQ, prevQ } from "../../../redux/slices/quiz-slice";
import Arrow from "../../../assets/icons/arrow.svg";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { FC, ReactNode } from "react";
import { Datepicker } from "../../../ui/datepicker/datepicker";
import { Counter } from "../../../ui/counter/counter";
import { Stars } from "../../../ui/stars/stars";
import { FoodSelect } from "../../../ui/food-select/food-select";
import { Form } from "../../../components/form/form";

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const { currentQuest } = useAppSelector((state) => state.quiz);
  return (
    <div className={styles.quest}>
      <div className={styles.content} style={{ transform: `translateX(-${currentQuest * 100}%)` }}>
        <div className={styles.wrapper}>{children}</div>
      </div>
    </div>
  );
};

export const Question1 = () => {
  const dispatch = useAppDispatch();
  return (
    <Wrapper>
      <h3>1/5 Какую страну Вы планируете посетить?</h3>
      <CountrySelect />
      <button className={styles.button} onClick={() => dispatch(nextQ())}>
        Далее <Arrow />
      </button>
    </Wrapper>
  );
};
export const Question2 = () => {
  const dispatch = useAppDispatch();
  return (
    <Wrapper>
      <h3>2/5 В какие даты?</h3>
      <div className={styles.datepicker}>
        <p>Примерная дата отправления</p>
        <Datepicker arrival />
      </div>
      <div className={styles.datepicker}>
        <p>Примерная дата возвращения</p>
        <Datepicker returns />
      </div>
      <div className={styles.group_buttons}>
        <button className={styles.button} onClick={() => dispatch(prevQ())}>
          <span className={styles.arrow_back}>
            <Arrow />
          </span>
          Назад
        </button>
        <button className={styles.button} onClick={() => dispatch(nextQ())}>
          Далее <Arrow />
        </button>
      </div>
    </Wrapper>
  );
};
export const Question3 = () => {
  const dispatch = useAppDispatch();
  return (
    <Wrapper>
      <h3>3/5 На сколько человек нужен тур?</h3>
      <div className={styles.counters}>
        <Counter adults>
          <p>Взрослых</p>
        </Counter>
        <div style={{ marginRight: "24px" }}></div>
        <Counter childrenCount>
          <p>Детей</p>
        </Counter>
      </div>
      <div className={styles.group_buttons}>
        <button className={styles.button} onClick={() => dispatch(prevQ())}>
          <span className={styles.arrow_back}>
            <Arrow />
          </span>
          Назад
        </button>
        <button className={styles.button} onClick={() => dispatch(nextQ())}>
          Далее <Arrow />
        </button>
      </div>
    </Wrapper>
  );
};
export const Question4 = () => {
  const dispatch = useAppDispatch();
  return (
    <Wrapper>
      <h3>4/5 Параметры отеля</h3>
      <div className={styles.counters}>
        <Stars>
          <p>Количество звёзд</p>
        </Stars>
      </div>
      <div className={styles.counters}>
        <FoodSelect />
      </div>
      <div className={styles.group_buttons}>
        <button className={styles.button} onClick={() => dispatch(prevQ())}>
          <span className={styles.arrow_back}>
            <Arrow />
          </span>
          Назад
        </button>
        <button className={styles.button} onClick={() => dispatch(nextQ())}>
          Далее <Arrow />
        </button>
      </div>
    </Wrapper>
  );
};
export const Question5 = () => {
  return (
    <Wrapper>
      <h3>5/5 Ваши данные для связи</h3>
      <div className={styles.form}>
        <Form style={"dark"} isQuiz />
      </div>
    </Wrapper>
  );
};
