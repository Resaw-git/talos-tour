import styles from "./counter.module.css";
import { FC, ReactNode, useState } from "react";

export const Counter:FC<{children: ReactNode}> = ({children}) => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.wrapper}>
      {children}
    <div className={styles.counter}>
      <span className={styles.controls} onClick={() => setCount((prevState) => (count <= 0 ? 0 : prevState - 1))}>
        -
      </span>
      <span className={styles.count}>{count}</span>
      <span className={styles.controls} onClick={() => setCount((prevState) => prevState + 1)}>
        +
      </span>
    </div>
    </div>
  );
};
