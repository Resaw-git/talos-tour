import styles from "./burger.module.css";
import { useAppDispatch } from "../../redux/hooks";
import { closeBurger, openModal } from "../../redux/slices/modal-slice";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import Cross from "../../assets/icons/cross.svg";
import Telegram from "../../assets/icons/teleg.svg";
import Whatsup from "../../assets/icons/whatsup.svg";
import Inst from "../../assets/icons/inst.svg";

export const Burger = () => {
  const dispatch = useAppDispatch();

  const escapeModal = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      dispatch(closeBurger());
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", escapeModal);
    return () => {
      document.removeEventListener("keydown", escapeModal);
    };
  }, []);

  return createPortal(
    <>
      <div onClick={() => dispatch(closeBurger())} className={styles.overlay}></div>
      <div className={styles.burger}>
        <div className={styles.cross} onClick={() => dispatch(closeBurger())}>
          <Cross />
        </div>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.link}>Главная</li>
            <li className={styles.link}>О нас</li>
            <li className={styles.link}>Подобрать тур</li>
            <li className={styles.link}>Отзывы</li>
            <li className={styles.link}>Для туриста</li>
            <li className={styles.link}>Контакты</li>
          </ul>
        </nav>
        <div className={styles.buttons}>
          <a href="tel:+79217747604" className={styles.phone}>+7 921 774-76-04</a>
          <button className={styles.recall} onClick={() => {
            dispatch(openModal());
            dispatch(closeBurger());
          }}>
            Обратный звонок
          </button>
          <div className={styles.socials}>
            <div className={styles.link}>
              <div className={styles.telegram}>
                <Telegram />
              </div>
            </div>
            <div className={styles.link}>
              <div className={styles.whatsup}>
                <Whatsup />
              </div>
            </div>
            <div className={styles.link}>
              <div className={styles.instagram}>
                <Inst />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("mobile-menu") as HTMLElement,
  );
};
