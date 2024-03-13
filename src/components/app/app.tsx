import styles from "./app.module.css";
import { Header } from "../header/header";
import { Promo } from "../promo/promo";
import { Advantages } from "../advantages/advantages";
import { About } from "../about/about";
import { Quiz } from "../quiz/quiz";
import { Footer } from "../footer/footer";
import { useAppSelector } from "../../redux/hooks";
import { Modal } from "../modal/modal";
import { Burger } from "../burger/burger";

export const App = () => {
  const { modal, burger } = useAppSelector(state => state.modal);

  return (
    <div className={styles.body}>
      <Header />
      <main>
        <Promo />
        <Advantages />
        <About />
        <Quiz />
      </main>
      <Footer />
      {modal && <Modal />}
      {burger && <Burger />}
    </div>
  );
};
