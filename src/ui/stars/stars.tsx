import styles from "./stars.module.css";
import { FC, ReactNode, useState } from "react";
import Star from "../../assets/icons/star.svg";
import { useAppDispatch } from "../../redux/hooks";
import { setStars } from "../../redux/slices/quiz-slice";

export const Stars: FC<{ children: ReactNode }> = ({ children }) => {
  const [rating, setRating] = useState(0);
  const dispatch = useAppDispatch();

  const handleStarClick = (clickedRating: number) => {
    setRating(clickedRating);
    dispatch(setStars(clickedRating));
  };

  return (
    <div className={styles.wrapper}>
      {children}
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map((i) => (
          <div className={`${i <= rating ? styles.active : ""}`} key={i} onClick={() => handleStarClick(i)}>
            <Star />
          </div>
        ))}
      </div>
    </div>
  );
};
