import styles from "./promo.module.css";
import img1 from "../../assets/images/promo_uhd.png";
import img2 from "../../assets/images/promo2_uhd.png";
import img3 from "../../assets/images/promo3_uhd.png";
import { useEffect, useState } from "react";
import { Button } from "../../ui/button/button";

export const Promo = () => {
  const images = [img1, img2, img3];
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeout = () =>
      setTimeout(() => {
        if (count === images.length - 1) {
          setCount(0);
        } else {
          setCount((prev) => prev + 1);
        }
      }, 10 * 1000);

    timeout();

    return clearTimeout(timeout());
  }, [count]);

  return (
    <section className={styles.promo}>
      <div style={{ backgroundImage: `url(${images[count]})` }} className={styles.image} />
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.left}>
            <p>Подберите идеальный тур не выходя из дома</p>
            <Button style={"light"}>Воплотить мечту</Button>
          </div>
          <div className={styles.right}>
            <h1>Туристическое агентство Talos&nbsp;Tour</h1>
            <p>Сопровождаем с момента подбора тура до Вашего возвращения</p>
          </div>
        </div>
      </div>
    </section>
  );
};
