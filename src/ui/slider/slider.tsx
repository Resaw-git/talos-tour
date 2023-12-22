import styles from "./slider.module.css";
import { Arrows } from "#ui/slider/arrows/arrows";
import { SliderList } from "#ui/slider/slider-list/slider-list";
import { Previews } from "#ui/slider/previews/previews";

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
