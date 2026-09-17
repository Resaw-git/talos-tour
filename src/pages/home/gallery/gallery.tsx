import styles from "./gallery.module.css";
import { Slider } from "../../../ui/slider/slider";
import { useAppDispatch } from "../../../redux/hooks";
import { useEffect } from "react";
import { loadImages } from "../../../redux/slices/slider-slice";
import img1 from "../../assets/images/IMG_1134.png?format=webp";
import img2 from "../../assets/images/IMG_1174.png?format=webp";
import img3 from "../../assets/images/IMG_3594.png?format=webp";
import img4 from "../../assets/images/IMG_8664.png?format=webp";
import img5 from "../../assets/images/IMG_3619.png?format=webp";
import img6 from "../../assets/images/IMG_8905.png?format=webp";


export const Gallery = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadImages([img1, img2, img3, img4, img5, img6]));
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
