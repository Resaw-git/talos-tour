import styles from "./footer.module.css";
import Telegram from "../../assets/icons/teleg.svg";
import Inst from "../../assets/icons/inst.svg";
import Whatsup from "../../assets/icons/whatsup.svg";
import { Form } from "../../ui/form/form";

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.layout}>
            <h1>Контакты:</h1>
            <div className={styles.contacts}>
              <div className={styles.left}>
                <p className={styles.text}>Свяжитесь с нами или оставьте заявку на обратный звонок</p>
                <div>
                  <a href="tel:+79217747604" className={styles.phone}>
                    +7 921 774-76-04
                  </a>
                </div>
                <div>
                  <a href="mailto:talos-tour@mail.ru" className={styles.email}>
                    talos-tour@mail.ru
                  </a>
                </div>
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
              <div className={styles.right}>
                <Form style={"light"} />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.under_footer}>
        <div className={styles.container}>
          <div className={styles.layout_footer}>
            <span className={styles.text}>© {new Date().getFullYear()} Талос Тур. Все права защищены</span>
            <nav className={styles.nav}>
              <ul className={styles.list}>
                <li className={styles.link}>Главная</li>
                <li className={styles.link}>О нас</li>
                <li className={styles.link}>Подобрать тур</li>
                <li className={styles.link}>Отзывы</li>
                <li className={styles.link}>Галерея</li>
                <li className={styles.link}>Для туриста</li>
              </ul>
            </nav>
            <span className={styles.link}>Политика конфиденциальности</span>
          </div>
        </div>
      </div>
    </>
  );
};
