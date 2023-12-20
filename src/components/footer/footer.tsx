import styles from "./footer.module.css";
import Telegram from "#assets/icons/teleg.svg";
import Inst from "#assets/icons/inst.svg";
import Whatsup from "#assets/icons/whatsup.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <h1>Контакты:</h1>
          <div className={styles.contacts}>
            <div className={styles.left}>
              <p className={styles.text}>Свяжитесь с нами или оставьте заявку на обратный звонок</p>
              <a href="tel:+79217747604" className={styles.phone}>
                +7 921 774-76-04
              </a>
              <a href="mailto:talos-tour@mail.ru" className={styles.email}>
                talos-tour@mail.ru
              </a>
              <h4>Мы в соцсетях:</h4>
              <div className={styles.socials}>
                <div className={styles.link}>
                  <div className={styles.telegram}>
                    <Telegram />
                  </div>
                  <p>Telegram</p>
                </div>
                <div className={styles.link}>
                  <div className={styles.whatsup}>
                    <Whatsup />
                  </div>
                  <p>WhatsApp</p>
                </div>
                <div className={styles.link}>
                  <div className={styles.instagram}>
                    <Inst />
                  </div>
                  <p>Instagram*</p>
                </div>
              </div>
              <p className={styles.notice}>
                *Instagram принадлежит компании Meta, которая запрещена на территории Российской&nbsp;Федерации
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
