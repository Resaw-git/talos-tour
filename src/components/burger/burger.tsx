import styles from "./burger.module.css";
import { useAppDispatch } from "../../redux/hooks";
import { closeBurger, openModal } from "../../redux/slices/modal-slice";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import Cross from "../../assets/icons/cross.svg";
import Telegram from "../../assets/icons/teleg.svg";
import Whatsup from "../../assets/icons/whatsup.svg";
import Inst from "../../assets/icons/inst.svg";
import { Nav } from "../nav/nav";

export const Burger = () => {
  const dispatch = useAppDispatch();


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

  return createPortal(
    <>
      <div onClick={() => dispatch(closeBurger())} className={styles.overlay}></div>
      <div className={styles.burger}>
        <div className={styles.cross} onClick={() => dispatch(closeBurger())}>
          <Cross />
        </div>

        <Nav styles={styles} />

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
