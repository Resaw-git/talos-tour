import styles from "./datepicker.module.css";
import { FC } from "react";

interface IDatepicker {
  value: string;
  onChange: () => void;
  placeholder: string;
}
export const Datepicker: FC<IDatepicker> = ({ placeholder, value, onChange }) => {
  return (
    <div>
      <input className={styles.datepicker} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};
