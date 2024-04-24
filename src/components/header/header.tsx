import styles from "./header.module.css";
import Logo from "../../assets/images/Logo.svg";
import Whatsup from "../../assets/icons/whatsup.svg";
import { useAppDispatch } from "../../redux/hooks";
import { openBurger, openModal } from "../../redux/slices/modal-slice";
import Burger from "../../assets/icons/burger.svg";
import { scrollTo } from "../../helpers/scroll-to";
import { Link } from "react-router-dom";

export const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <Link to="/">
            <img src={Logo} alt="логотип" className={styles.logo} />
          </Link>

          <nav className={styles.nav}>
            <ul className={styles.list}>
              <Link to="/" className={styles.list_item}>
                <li onClick={() => scrollTo("about")}>О нас</li>
              </Link>
              <Link to="/" className={styles.list_item}>
                <li onClick={() => scrollTo("get-tour")}>Подобрать тур</li>
              </Link>
              {/*               <li className={styles.list_item} onClick={() => scrollTo("reviews")}>
                Отзывы
              </li> */}
              <Link className={styles.list_item} to="/tourist">
                Для туриста
              </Link>
              <li className={styles.list_item} onClick={() => scrollTo("contacts")}>
                Контакты
              </li>
            </ul>
          </nav>
          <div className={styles.buttons}>
            <a href="tel:+79217747604" className={styles.phone}>
              +7 921 774-76-04
            </a>
            <a href="https://wa.me/89217747604" target="_blank" className={styles.whatsup}>
              <Whatsup />
            </a>
            <button className={styles.recall} onClick={() => dispatch(openModal())}>
              Обратный звонок
            </button>
            <button className={styles.burger} onClick={() => dispatch(openBurger())}>
              <Burger />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
