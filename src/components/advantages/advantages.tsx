import styles from "./advantages.module.css";
import Handshake from "../../assets/icons/handshake.svg";
import Safety from "../../assets/icons/safety.svg";
import Flight from "../../assets/icons/flight-international.svg";
import Headphone from "../../assets/icons/headphone.svg";
import Royal from "../../assets/icons/royal.svg";

export const Advantages = () => {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.content}>
            <div className={`${styles.start} ${styles.item1}`}>Нас выбирают потому что мы гарантируем:</div>
            <div className={`${styles.block} ${styles.item2}`}>
              <div className={styles.icon}>
                <Handshake />
              </div>
              <div>
                <h4>Сопровождение</h4>
                <p>Быстрое решение любых вопросов в течении всего путешествия</p>
              </div>
            </div>
            <div className={`${styles.block} ${styles.item3}`}>
              <div className={styles.icon}>
                <Safety />
              </div>
              <div>
                <h4>Надежность</h4>
                <p>Состоим в реестре турагентств, работаем по договору</p>
              </div>
            </div>
            <div className={`${styles.block} ${styles.item4}`}>
              <div className={styles.icon}>
                <Flight />
              </div>
              <div>
                <h4>Доступность</h4>
                <p>Подбор вылетов из&nbsp;любого&nbsp;региона</p>
              </div>
            </div>
            <div className={`${styles.block} ${styles.item5}`}>
              <div className={styles.icon}>
                <Headphone />
              </div>
              <div>
                <h4>Онлайн-оформление</h4>
                <p>Вам не нужно тратить время на дорогу в офис</p>
              </div>
            </div>
            <div className={`${styles.end} ${styles.item6}`}>
              <div className={styles.icon}>
                <Royal />
              </div>
              <div>
                <h4>Индивидуальный подход</h4>
                <p>Подбираем путешествие под Ваши пожелания и бюджет только в проверенные отели</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
