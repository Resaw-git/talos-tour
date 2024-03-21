import styles from "./modal.module.css";
import { Form } from "../../ui/form/form";

export const FormModal = () => {
  return (
    <>
      <h5 className={styles.header}>Заявка на обратный звонок</h5>
      <Form style={"light"}/>
    </>
  );
};
