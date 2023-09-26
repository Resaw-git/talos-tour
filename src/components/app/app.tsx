import styles from "./app.module.css";
import { Header } from "#components/header/header";
import { Promo } from "#components/promo/promo";
import { Advantages } from "#components/advantages/advantages";
import { About } from "#components/about/about";
import { Quiz } from "#components/quiz/quiz";

export const App = () => {
  return (
    <div className={styles.body}>
      <Header />
      <main>
        <Promo />
        <Advantages />
        <About />
        <Quiz />
      </main>
    </div>
  );
};
