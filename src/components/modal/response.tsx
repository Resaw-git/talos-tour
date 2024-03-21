import Success from "../../assets/icons/success.svg";
import Error from "../../assets/icons/error.svg";
import styles from "./modal.module.css";
import { useAppSelector } from "../../redux/hooks";
export const Response = () => {
  const { loading, success } = useAppSelector((state) => state.submit);
  const loader = (
    <div className={styles.container}>
      <span className={styles.loader}></span>
    </div>
  );
  const messageOk = (
    <>
      <h3 className={styles.title}>
        Ваша заявка успешно отправлена. Мы свяжемся с Вами в ближайшее время и подберём идеальный тур!
      </h3>
      <div className={styles.icon}>
        <Success />
      </div>
    </>
  );

  const messageError = (
    <>
      <h3 className={styles.title}>
        Произошла ошибка при отправке заявки. Пожалуйста, попробуйте ещё раз или воспользуйтесь другими способами связи,
        указанными на сайте.
      </h3>
      <div className={styles.icon}>
        <Error />
      </div>
    </>
  );

  return loading ? loader : success ? messageOk : messageError;
};
