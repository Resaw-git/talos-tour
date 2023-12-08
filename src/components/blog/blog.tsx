import styles from "./blog.module.css";
import spring from "#assets/images/spring.png";
import summer from "#assets/images/summer.png";
import fall from "#assets/images/fall.png";
import winter from "#assets/images/winter.png";

export const Blog = () => {
  return (
    <section className={styles.blog}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <h1>Туристический календарь: куда поехать весной, летом, осенью и зимой?</h1>
          <p>
            Предлагаем наши сезонные рекомендации для путешествий — они разбиты по месяцам. Все советы основаны на
            статистике последних лет и личном опыте бывалых путешественников. Узнайте наверняка, где искупаться в конце
            осени и как спланировать насыщенный и бюджетный отпуск в начале весны.
          </p>
          <div className={styles.seasons}>
            <div className={styles.card}>
              <img src={spring} alt="весна" />
              <h4>Весна</h4>
              <div className={styles.button}>
                <button>Узнать подробнее</button>
              </div>
            </div>
            <div className={styles.card}>
              <img src={summer} alt="лето" />
              <h4>Лето</h4>
              <div className={styles.button}>
                <button>Узнать подробнее</button>
              </div>
            </div>
            <div className={styles.card}>
              <img src={fall} alt="осень" />
              <h4>Осень</h4>
              <div className={styles.button}>
                <button>Узнать подробнее</button>
              </div>
            </div>
            <div className={styles.card}>
              <img src={winter} alt="зима" />
              <h4>Зима</h4>
              <div className={styles.button}>
                <button>Узнать подробнее</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
