import styles from "./preview-img.module.css";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "#redux/hooks";
import { goToSlide } from "#redux/slices/slider-slice";

type PreviewImgType = {
  number: number;
  src: string;
};

export const PreviewImg: FC<PreviewImgType> = ({ number, src }) => {
  const dispatch = useAppDispatch();
  const { slide } = useAppSelector((state) => state.slider);

  return (
    <div className={`${number === slide ? styles.selected : styles.container}`} onClick={() => dispatch(goToSlide(number))}>
      <img src={src} alt="none" className={styles.img} />
    </div>
  );
};
