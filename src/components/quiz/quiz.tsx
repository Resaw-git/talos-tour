import styles from "./quiz.module.css";
import palm1 from "../../assets/images/palm1.svg";
import palm2 from "../../assets/images/palm2.svg";
import palm3 from "../../assets/images/palm3.svg";
import { Question1, Question2, Question3, Question4, Question5 } from "./questions";

export const Quiz = () => {
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
          <Question1 />
          <Question2 />
          <Question3 />
          <Question4 />
          <Question5 />
      </div>
    </section>
  );
};
