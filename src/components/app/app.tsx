import styles from "./app.module.css";
import { Header } from "#components/header/header";
import { Promo } from "#components/promo/promo";
import { Advantages } from "#components/advantages/advantages";
import { About } from "#components/about/about";
import { Quiz } from "#components/quiz/quiz";
import { Blog } from "#components/blog/blog";
import { Reviews } from "#components/reviews/reviews";
import { Subscribe } from "#components/subcribe/subscribe";
import { Gallery } from "#components/gallery/gallery";
import { Footer } from "#components/footer/footer";


export const App = () => {
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
    </div>
  );
};
