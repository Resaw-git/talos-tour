import { useEffect } from "react";
import styles from "./modal.module.css";
import { createPortal } from "react-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { closeModal } from "../../redux/slices/modal-slice";
import Cross from "../../assets/icons/cross.svg";
import { FormModal } from "./form-modal";
import { Response } from "./response";
import { setSubmit } from "../../redux/slices/submit-slice";

export const Modal = () => {
  const dispatch = useAppDispatch();
  const { submit } = useAppSelector((state) => state.submit);

  const escapeModal = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      dispatch(setSubmit(false));
      dispatch(closeModal());
    }
  };

  const hideModal = () => {
    dispatch(setSubmit(false));
    dispatch(closeModal());
  };

  useEffect(() => {
    document.addEventListener("keydown", escapeModal);
    return () => {
      document.removeEventListener("keydown", escapeModal);
    };
  }, []);

  return createPortal(
    <>
      <div onClick={() => hideModal()} className={styles.overlay}></div>
      <div className={styles.modal}>
        <div className={styles.cross} onClick={() => hideModal()}>
          <Cross />
        </div>
        {submit ? <Response /> : <FormModal />}
      </div>
    </>,
    document.getElementById("modal") as HTMLElement,
  );
};
