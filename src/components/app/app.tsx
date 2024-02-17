import styles from "./app.module.css";
import { Header } from "../header/header";
import { Promo } from "../promo/promo";
import { Advantages } from "../advantages/advantages";
import { About } from "../about/about";
import { Quiz } from "../quiz/quiz";
import { Blog } from "../blog/blog";
import { Reviews } from "../reviews/reviews";
import { Subscribe } from "../subcribe/subscribe";
import { Gallery } from "../gallery/gallery";
import { Footer } from "../footer/footer";
import { useAppSelector } from "../../redux/hooks";
import { Modal } from "../modal/modal";

export const App = () => {
  const { open } = useAppSelector(state => state.modal);

  return (
    <div className={styles.body}>
      <Header />
      <main>
        <Promo />
        <Advantages />
        <About />
        <Quiz />
        <Blog />
        <Reviews />
        <Subscribe />
        <Gallery />
      </main>
      <Footer />
      {open && <Modal />}
    </div>
  );
};
