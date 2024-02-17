import { useEffect } from "react";
import styles from "./modal.module.css";
import { createPortal } from "react-dom";
import { useAppDispatch } from "../../redux/hooks";
import { closeModal } from "../../redux/slices/modal-slice";
import Cross from "../../assets/icons/cross.svg";
import { Form } from "../../ui/form/form";


export const Modal = () => {
  const dispatch = useAppDispatch();

  const escapeModal = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      dispatch(closeModal());
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", escapeModal);
    return () => {
      document.removeEventListener("keydown", escapeModal);
    };
  }, []);

  return createPortal(
    <>
      <div onClick={() => dispatch(closeModal())} className={styles.overlay}></div>
      <div className={styles.modal}>
        <div className={styles.cross} onClick={() => dispatch(closeModal())}>
          <Cross />
        </div>
        <h5 className={styles.header}>Заявка на обратный звонок</h5>
        <Form style={"light"}/>
      </div>
    </>,
    document.getElementById("modal") as HTMLElement,
  );
};
