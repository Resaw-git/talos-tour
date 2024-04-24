import { Promo } from "../promo/promo";
import { Advantages } from "../advantages/advantages";
import { About } from "../about/about";
import { Quiz } from "../quiz/quiz";

export const Home = () => (
    <main>
      <Promo />
      <Advantages />
      <About />
      <Quiz />
    </main>
  );