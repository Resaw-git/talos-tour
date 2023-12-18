import styles from "./gallery.module.css";
import { Slider } from "#ui/slider/slider";
import { useAppDispatch } from "#redux/hooks";
import { useEffect } from "react";
import { loadImages } from "#redux/slices/slider-slice";
import img1 from "#assets/images/promo_uhd.png";
import img2 from "#assets/images/promo2_uhd.png";
import img3 from "#assets/images/promo3_uhd.png";

export const Gallery = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadImages([img1, img2, img3]));
  }, [dispatch]);

  return (
    <div className={styles.gallery}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <h1>Галерея</h1>
          <Slider />
        </div>
      </div>
    </div>
  );
};
