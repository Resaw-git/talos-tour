import styles from "./header.module.css";
import Logo from "../../assets/images/Logo.svg";
import Whatsup from "../../assets/icons/whatsup.svg";
import { useAppDispatch } from "../../redux/hooks";
import { openBurger, openModal } from "../../redux/slices/modal-slice";
import Burger from "../../assets/icons/burger.svg";
import { Link } from "react-router-dom";
import { Nav } from "../nav/nav";

export const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <Link to="/">
            <img src={Logo} alt="логотип" className={styles.logo} />
          </Link>

          <Nav styles={styles} />

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
