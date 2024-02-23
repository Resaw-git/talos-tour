import styles from "./promo.module.css";
import { Button } from "../../ui/button/button";

export const Promo = () => {

  return (
    <section className={styles.promo}>
      <div className={styles.image} />
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
