import { FC } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { closeBurger } from "../../redux/slices/modal-slice";
import { scrollTo } from "../../helpers/scroll-to";

type NavProps = {
  styles: CSSModuleClasses;
};

export const Nav: FC<NavProps> = ({ styles }) => {
  const dispatch = useAppDispatch();
  const { burger } = useAppSelector((state) => state.modal);

  const closeMenu = () => {
    if (burger) {
      dispatch(closeBurger());
    }
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <Link to="/" className={styles.link}>
          <li
            onClick={() => {
              closeMenu();
              scrollTo("about");
            }}
          >
            О нас
          </li>
        </Link>
        <Link to="/" className={styles.link}>
          <li
            onClick={() => {
              closeMenu();
              scrollTo("get-tour");
            }}
          >
            Подобрать тур
          </li>
        </Link>
        {/*               
        <li className={styles.link} onClick={() => scrollFunc("reviews")}>
          Отзывы
        </li> 
        */}
        <Link className={styles.link} to="/tourist">
          <li onClick={() => closeMenu()}>Для туриста</li>
        </Link>
        <li
          className={styles.link}
          onClick={() => {
            closeMenu();
            scrollTo("contacts");
          }}
        >
          Контакты
        </li>
      </ul>
    </nav>
  );
};
