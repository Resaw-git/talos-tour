import styles from "./slider-img.module.css";
import { FC } from "react";

type SliderImgType = {
  src: string;
};

export const SliderImg: FC<SliderImgType> = ({ src }) => {
  return (
    <div className={styles.container}>
      <img src={src} alt="none" className={styles.img} />
    </div>
    );
};
