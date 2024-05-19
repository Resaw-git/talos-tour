import styles from "./form.module.css";
import { Button } from "../../ui/button/button";
import { Input } from "../../ui/input/input";
import { Checkbox } from "../../ui/checkbox/checkbox";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { openModal } from "../../redux/slices/modal-slice";
import { setSubmit, setSuccess, setLoading } from "../../redux/slices/submit-slice";
import Arrow from "../../assets/icons/arrow.svg";
import { prevQ } from "../../redux/slices/quiz-slice";
import { Controller, FieldValues, useForm } from "react-hook-form";

type FormProps = {
  style: "light" | "dark";
  isQuiz?: boolean;
};

export const Form: FC<FormProps> = ({ style, isQuiz }) => {
  const dispatch = useAppDispatch();
  const { country, dates, persons, stars, nutrition } = useAppSelector((state) => state.quiz);

  const { control, handleSubmit } = useForm({
    mode: "all",
  });

  const submitForm = (data: FieldValues) => {
    dispatch(openModal());
    dispatch(setLoading(true));
    dispatch(setSubmit(true));

    console.log(data);
    const form = data as typeof data & {
      name: { value: string };
      phone: { value: string | number };
      msg: { value: string } | undefined;
      policy: { checked: boolean };
    };

    const json = JSON.stringify({
      name: form.name.value,
      phone: form.phone.value,
      msg: form.msg?.value,
      policy: form.policy.checked,
      dateArrival: dates.arrival,
      dateReturn: dates.return,
      adults: persons.adults,
      children: persons.children,
      country,
      stars,
      nutrition,
    });

    fetch("mail.php", {
      method: "POST",
      body: json,
    })
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error(`${response.status} ${response.statusText}`);
        }
      })
      .then(() => {
        dispatch(setSuccess(true));
        dispatch(setLoading(false));
      })
      .catch(() => {
        dispatch(setSuccess(false));
        dispatch(setLoading(false));
      });
  };

  return (
    <form className={styles.form} noValidate onSubmit={handleSubmit(submitForm)}>
      <div className={styles.inputs}>
        <Controller
          control={control}
          name="name"
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <Input
              label="Ваше имя"
              type="text"
              style={style}
              onChange={(event) => field.onChange(event)}
              value={field.value || ""}
              isError={!!fieldState.error}
            />
          )}
        />

        <Controller
          control={control}
          name="phone"
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <Input
              label="Ваш номер телефона"
              type="tel"
              style={style}
              onChange={(event) => field.onChange(event)}
              value={field.value || ""}
              isError={!!fieldState.error}
            />
          )}
        />

        <Controller
          control={control}
          name="msg"
          render={({ field, fieldState }) => (
            <Input
              label="Ваш комментарий"
              style={style}
              type="text"
              onChange={(event) => field.onChange(event)}
              value={field.value || ""}
              isError={!!fieldState.error}
            />
          )}
        />
      </div>

      {isQuiz ? (
        <div className={styles.group_buttons}>
          <button
            className={styles.button}
            onClick={(event) => {
              event.preventDefault();
              dispatch(prevQ());
            }}
          >
            <span className={styles.arrow_back}>
              <Arrow />
            </span>
            Назад
          </button>
          <button type="submit" className={styles.button}>
            Оставить заявку
          </button>
        </div>
      ) : (
        <Button type="submit" className={styles.button} style={style}>
          Оставить заявку
        </Button>
      )}

      <Controller
        control={control}
        name="policy"
        rules={{ required: true }}
        render={({ field, fieldState }) => (
          <Checkbox style={style} onChange={(event) => field.onChange(event)} isError={!!fieldState.error} />
        )}
      />
    </form>
  );
};
