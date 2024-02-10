import styles from "./quiz.module.css";
import palm1 from "../../assets/images/palm1.svg";
import palm2 from "../../assets/images/palm2.svg";
import palm3 from "../../assets/images/palm3.svg";
import { CountrySelect } from "../../ui/country-select/country-select";
import Arrow from "../../assets/icons/arrow.svg";

export const Quiz = () => {
  const quest1 = (
    <div className={styles.content}>
      <h3>1/5 Какую страну Вы планируете посетить?</h3>
      <CountrySelect />
      <button className={styles.button}>
        Далее <Arrow />
      </button>
    </div>
  );

  return (
    <section className={styles.quiz}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <h1>Ответьте на несколько вопросов и мы подберем Вам идеальное путешествие!</h1>
        </div>
      </div>
      <div className={styles.background}>
        <img src={palm1} alt="пальма" className={styles.palm1} />
        <img src={palm2} alt="пальма" className={styles.palm2} />
        <img src={palm3} alt="пальма" className={styles.palm3} />

        {quest1}

      </div>
    </section>
  );
};
