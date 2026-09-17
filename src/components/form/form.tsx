import styles from "./form.module.css";
import { Button } from "../../ui/button/button";
import { Input } from "../../ui/input/input";
import { Checkbox } from "../../ui/checkbox/checkbox";
import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { openModal } from "../../redux/slices/modal-slice";
import { setSubmit, setSuccess, setLoading, setErrorMessage } from "../../redux/slices/submit-slice";
import Arrow from "../../assets/icons/arrow.svg";
import { prevQ } from "../../redux/slices/quiz-slice";
import { Controller, useForm } from "react-hook-form";

type FormProps = {
  style: "light" | "dark";
  isQuiz?: boolean;
};

type FormValues = {
  name: string;
  phone: string;
  msg?: string;
  policy: boolean;
  website?: string;
};

export const Form: FC<FormProps> = ({ style, isQuiz }) => {
  const dispatch = useAppDispatch();
  const { country, dates, persons, stars, nutrition } = useAppSelector((state) => state.quiz);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { control, handleSubmit, register } = useForm<FormValues>({
    mode: "all",
  });

  const submitForm = (data: FormValues) => {
    dispatch(openModal());
    dispatch(setLoading(true));
    dispatch(setSubmit(true));
    dispatch(setErrorMessage(""));
    setIsSubmitting(true);

    const json = JSON.stringify({
      name: data.name,
      phone: data.phone,
      msg: data.msg,
      policy: data.policy,
      website: data.website,
      dateArrival: dates.arrival,
      dateReturn: dates.return,
      adults: persons.adults,
      children: persons.children,
      country,
      stars,
      nutrition,
    });

    fetch("/mail.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: json,
    })
      .then((response) => response.json())
      .then((result: { success: boolean; message: string }) => {
        dispatch(setSuccess(result.success));
        if (!result.success) {
          dispatch(setErrorMessage(result.message));
        }
      })
      .catch(() => {
        dispatch(setSuccess(false));
        dispatch(setErrorMessage("Не удалось отправить заявку. Проверьте соединение и попробуйте ещё раз."));
      })
      .finally(() => {
        dispatch(setLoading(false));
        setIsSubmitting(false);
      });
  };

  return (
    <form className={styles.form} noValidate onSubmit={handleSubmit(submitForm)}>
      <input
        type="text"
        {...register("website")}
        style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className={styles.inputs}>
        <Controller
          control={control}
          name="name"
          rules={{
            required: "Пожалуйста, укажите ваше имя",
            minLength: { value: 2, message: "Имя слишком короткое" },
            pattern: {
              value: /^[а-яёА-ЯЁa-zA-Z\s-]+$/,
              message: "Имя может содержать только буквы",
            },
          }}
          render={({ field, fieldState }) => (
            <Input
              label="Ваше имя"
              type="text"
              style={style}
              onChange={field.onChange}
              value={field.value || ""}
              isError={!!fieldState.error}
              errorText={fieldState.error?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="phone"
          rules={{
            required: "Пожалуйста, укажите номер телефона",
            pattern: {
              value: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
              message: "Заполните номер телефона полностью",
            },
          }}
          render={({ field, fieldState }) => (
            <Input
              label="Ваш номер телефона"
              type="tel"
              style={style}
              onChange={field.onChange}
              value={field.value || ""}
              isError={!!fieldState.error}
              errorText={fieldState.error?.message}
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
              onChange={field.onChange}
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
          <button type="submit" className={styles.button} disabled={isSubmitting}>
            Оставить заявку
          </button>
        </div>
      ) : (
        <Button type="submit" className={styles.button} style={style} disabled={isSubmitting}>
          Оставить заявку
        </Button>
      )}

      <Controller
        control={control}
        name="policy"
        rules={{ required: true }}
        render={({ field, fieldState }) => (
          <Checkbox
            style={style}
            checked={field.value || false}
            onChange={field.onChange}
            isError={!!fieldState.error}
          />
        )}
      />
    </form>
  );
};
