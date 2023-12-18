import styles from "./preview-img.module.css";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "#redux/hooks";
import { goToSlide } from "#redux/slices/slider-slice";

type PreviewImgType = {
  number: number;
};

export const PreviewImg: FC<PreviewImgType> = ({ number }) => {
  const dispatch = useAppDispatch();
  const { slide } = useAppSelector((state) => state.slider);

  return (
    <div className={`${number === slide ? styles.selected : styles.img}`} onClick={() => dispatch(goToSlide(number))}>
      {number + 1}
    </div>
  );
};
