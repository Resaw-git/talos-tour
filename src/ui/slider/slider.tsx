import styles from "./slider.module.css";
import { Arrows } from "./arrows/arrows";
import { SliderList } from "./slider-list/slider-list";
import { Previews } from "./previews/previews";

export const Slider = () => {

  return (
    <div className={styles.content}>
      <div className={styles.main}>
        <SliderList />
        <div className={styles.arrows}>
          <Arrows />
        </div>
      </div>
      <Previews />
    </div>
  );
};
