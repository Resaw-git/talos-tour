import styles from "./header.module.css";
import Logo from "../../assets/images/Logo.svg";
import Whatsup from "../../assets/icons/whatsup.svg";
import { useAppDispatch } from "../../redux/hooks";
import { openModal } from "../../redux/slices/modal-slice";

export const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <a href="/">
            <img src={Logo} alt="логотип" className={styles.logo} />
          </a>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li className={styles.list_item}>О нас</li>
              <li className={styles.list_item}>Подобрать тур</li>
              <li className={styles.list_item}>Отзывы</li>
              <li className={styles.list_item}>Для туриста</li>
              <li className={styles.list_item}>Контакты</li>
            </ul>
          </nav>
          <a href="tel:+79217747604" className={styles.phone}>+7 921 774-76-04</a>
          <a href="#" className={styles.whatsup}>
            <Whatsup />
          </a>
          <button className={styles.recall} onClick={() => dispatch(openModal())}>
            Обратный звонок
          </button>
        </div>
      </div>
    </header>
  );
};
