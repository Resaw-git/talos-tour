import styles from "./footer.module.css";
import Telegram from "../../assets/icons/teleg.svg";
import Inst from "../../assets/icons/inst.svg";
import Whatsup from "../../assets/icons/whatsup.svg";
import { Form } from "../../ui/form/form";

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer} id="contacts">
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
                  <a href="https://t.me/talos_tour" target="_blank" className={styles.link}>
                    <div className={styles.telegram}>
                      <Telegram />
                    </div>
                    <p>Telegram</p>
                  </a>
                  <a href="https://wa.me/89217747604" target="_blank" className={styles.link}>
                    <div className={styles.whatsup}>
                      <Whatsup />
                    </div>
                    <p>WhatsApp</p>
                  </a>
                  <a href="https://www.instagram.com/talos_tour" target="_blank" className={styles.link}>
                    <div className={styles.instagram}>
                      <Inst />
                    </div>
                    <p>Instagram*</p>
                  </a>
                </div>
                <p className={styles.notice}>
                  *Instagram принадлежит компании Meta, которая запрещена на территории Российской Федерации
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
            <div className={styles.step_menu}>
              <span className={styles.text}>© {new Date().getFullYear()} Талос Тур. Все права защищены</span>
              <a href="/policy.pdf" download className={styles.link}>
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
