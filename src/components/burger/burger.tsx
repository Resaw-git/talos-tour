import styles from "./burger.module.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { closeBurger, openModal } from "../../redux/slices/modal-slice";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import Cross from "../../assets/icons/cross.svg";
import Telegram from "../../assets/icons/teleg.svg";
import Whatsup from "../../assets/icons/whatsup.svg";
import Inst from "../../assets/icons/inst.svg";
import { scrollTo } from "../../helpers/scroll-to";

export const Burger = () => {
  const dispatch = useAppDispatch();
  const {burger} = useAppSelector((state) => state.modal);


  useEffect(() => {
    const escapeModal = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        dispatch(closeBurger());
      }
    };

    document.addEventListener("keydown", escapeModal);
    return () => {
      document.removeEventListener("keydown", escapeModal);
    };
  }, [dispatch]);

  const scrollToSection = (section: string) => {
    if (burger) {
      dispatch(closeBurger())
    }
    scrollTo(section);
  }

  return createPortal(
    <>
      <div onClick={() => dispatch(closeBurger())} className={styles.overlay}></div>
      <div className={styles.burger}>
        <div className={styles.cross} onClick={() => dispatch(closeBurger())}>
          <Cross />
        </div>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.link} onClick={() => scrollToSection("promo")}>Главная</li>
            <li className={styles.link} onClick={() => scrollToSection("about")}>О нас</li>
            <li className={styles.link} onClick={() => scrollToSection("get-tour")}>Подобрать тур</li>
            <li className={styles.link} onClick={() => scrollToSection("reviews")}>Отзывы</li>
            <li className={styles.link} onClick={() => scrollToSection("for-tourist")}>Для туриста</li>
            <li className={styles.link} onClick={() => scrollToSection("contacts")}>Контакты</li>
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
              <a href="https://t.me/talos_tour" target="_blank" className={styles.telegram}>
                <Telegram />
              </a>
            </div>
            <div className={styles.link}>
              <a href="https://wa.me/89217747604" target="_blank" className={styles.whatsup}>
                <Whatsup />
              </a>
            </div>
            <div className={styles.link}>
              <a href="https://www.instagram.com/talos_tour" target="_blank" className={styles.instagram}>
                <Inst />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("mobile-menu") as HTMLElement,
  );
};
