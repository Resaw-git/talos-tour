import styles from "./counter.module.css";
import { FC, ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setAdults, setChildren } from "../../redux/slices/quiz-slice";

export const Counter: FC<{ children: ReactNode; adults?: boolean; childrenCount?: boolean }> = ({
  children,
  adults,
  childrenCount,
}) => {
  const dispatch = useAppDispatch();

  const count = useAppSelector((state) => (adults ? state.quiz.persons.adults : state.quiz.persons.children));

  const handleCount = (operation: "+" | "-") => {
    if (operation === "-" && count === 0) return;

    const newCount = operation === "+" ? count + 1 : count - 1;

    if (adults) {
      dispatch(setAdults(newCount));
    }

    if (childrenCount) {
      dispatch(setChildren(newCount));
    }
  };

  return (
    <div className={styles.wrapper}>
      {children}
      <div className={styles.counter}>
        <span className={styles.controls} onClick={() => handleCount("-")}>
          -
        </span>
        <span className={styles.count}>{count}</span>
        <span className={styles.controls} onClick={() => handleCount("+")}>
          +
        </span>
      </div>
    </div>
  );
};
