import styles from "./arrows.module.css";
import { useAppDispatch } from "#redux/hooks";
import { changeSlide } from "#redux/slices/slider-slice";
import { Arrow } from "#ui/arrow/arrow";

export const Arrows = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.arrows}>
      <Arrow direction={"left"} onClick={() => dispatch(changeSlide(-1))} />
      <Arrow direction={"right"} onClick={() => dispatch(changeSlide(1))} />
    </div>
  );
};
