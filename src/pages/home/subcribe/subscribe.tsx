import styles from "./subscribe.module.css";
import Telegram from "../../assets/icons/teleg.svg";
import Instagram from "../../assets/icons/inst.svg";

export const Subscribe = () => {
  return (
    <section className={styles.subscribe}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <h1>Подпишитесь и узнавайте первыми о самых выгодных турах и ежедневных горящих предложениях</h1>
          <div className={styles.buttons}>
            <button>Telegram <Telegram /> </button>
            <button>Instagram* <Instagram /> </button>
          </div>
        </div>
      </div>
    </section>
  );
};
