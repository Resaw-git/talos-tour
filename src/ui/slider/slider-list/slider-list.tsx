import styles from "./slider-list.module.css";
import { useAppSelector } from "#redux/hooks";
import { SliderImg } from "./slider-img/slider-img";

export const SliderList = () => {
  const { items, slide } = useAppSelector((state) => state.slider);

  return (
    <div className={styles.list} style={{ transform: `translateX(-${slide * 100}%)` }}>
      {items.map((src, index) => (
        <SliderImg key={index} src={src} />
      ))}
    </div>
  );
};
