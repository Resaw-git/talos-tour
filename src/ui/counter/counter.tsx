import styles from "./counter.module.css";
import { FC, ReactNode, useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { setAdults, setChildren } from "../../redux/slices/quiz-slice";

export const Counter: FC<{ children: ReactNode; adults?: boolean; childrenCount?: boolean }> = ({
  children,
  adults,
  childrenCount,
}) => {
  const [count, setCount] = useState(0);
  const dispatch = useAppDispatch();
  const setStore = (count: number) => {
    if (adults) {
      dispatch(setAdults(count));
    }

    if (childrenCount) {
      dispatch(setChildren(count));
    }
  };

  const handleCount = (operation: "+" | "-") => {
    if (operation === "-") {
      if (count === 0) return;
      setCount((prevCount) => {
        return prevCount - 1;
      });
    }

    if (operation === "+") {
      setCount((prevCount) => {
        return prevCount + 1;
      });
    }
  };

  useEffect(() => {
    setStore(count);
  }, [count]);

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
