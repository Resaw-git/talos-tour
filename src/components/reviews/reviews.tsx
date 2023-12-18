import styles from "./reviews.module.css";
import sh1 from "#assets/images/sh1.png";
import sh2 from "#assets/images/sh2.png";
import sh3 from "#assets/images/sh3.png";
import sh4 from "#assets/images/sh4.png";
import { Arrow } from "#ui/arrow/arrow";


export const Reviews = () => {
  return (
    <section className={styles.reviews}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <h1>Отзывы</h1>
          <div className={styles.screenshots}>
            <img src={sh1} alt="скриншот с отзывом" />
            <img src={sh2} alt="скриншот с отзывом" />
            <img src={sh3} alt="скриншот с отзывом" />
            <img src={sh4} alt="скриншот с отзывом" />
          </div>
          <div className={styles.controls}>
            <Arrow direction="left" />
            <Arrow direction="right" />
          </div>
        </div>
      </div>
    </section>
  );
};
