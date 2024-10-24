import styles from "./about.module.css";
import photo from "../../../assets/images/about.png";

export const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.layout}>
          <h2 className={styles.title}>Talos Tour - семейное турагентство</h2>
          <div className={styles.photo}>
            <div className={styles.background}></div>
            <img src={photo} alt="семейное фото" className={styles.img} />
          </div>
          <div className={styles.text}>
            <p>
              Мы всегда вели активный образ жизни, путешествовали, открывали для себя новые страны, изучали их культуру
              и быт. Спустя время решили применить наш богатый опыт в данной сфере и открыть собственное туристическое
              агентство.
            </p>
            <p>
              Цель — быть надёжной защитой и поддержкой для наших туристов, поэтому агентство и получило название «Талос
              Тур» в честь Талоса, который согласно древнегреческой мифологии был создан Зевсом для охраны острова Крит.
            </p>
            <p>
              Наш многолетний опыт работы позволяет, учитывая пожелания туриста, подбирать туры, которые оставляют самые
              красочные и тёплые воспоминания. Мы дорожим репутацией и к каждой подборке относимся индивидуально.
            </p>
            <p>
              Период пандемии заставил реорганизовать работу агентства: мы отказались от офиса и полностью перешли в
              онлайн-формат. Теперь не нужно ехать в офис экономя невосполнимый в нашей жизни ресурс — ВРЕМЯ!
            </p>
            <p>
              Подборку с фотографиями, отзывами и реальной стоимостью можно получить на любое устройство, подключённое к
              интернету, обсудить с семьёй или друзьями в удобном для вас месте!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
