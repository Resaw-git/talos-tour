import { Promo } from "./promo/promo";
import { Advantages } from "./advantages/advantages";
import { About } from "./about/about";
import { Quiz } from "./quiz/quiz";
import { Calendar } from "./calendar/calendar";

export const Home = () => (
    <main>
      <Promo />
      <Advantages />
      <About />
      <Quiz />
      <Calendar />
    </main>
  );