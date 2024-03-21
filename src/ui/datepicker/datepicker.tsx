import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "dayjs/locale/ru.js";
import { styled, TextFieldProps } from "@mui/material";
import TextField from "@mui/material/TextField";
import { FC } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { setDateArrival, setDateReturn } from "../../redux/slices/quiz-slice";

const StyledTextField = styled((props: TextFieldProps) => <TextField {...props} />)({
  [`& .MuiInputBase-root`]: {
    fontFamily: "Raleway",
    fontSize: "16px",
    lineHeight: "21px",
    color: "#06266f",
    fontWeight: 500,
  },
  [`& .MuiOutlinedInput-notchedOutline`]: {
    display: "none",
  },
});


export const Datepicker:FC<{arrival?: boolean, returns?: boolean}> = ({arrival, returns}) => {
  const dispatch = useAppDispatch();
  const handleDateChange = (date: Date | null) => {
    const dateString = date?.toLocaleString()
    if (dateString !== undefined) {
      const newDate = new Date(dateString)
      const formattedDate = newDate.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' })

      if (arrival) {
        dispatch(setDateArrival(formattedDate))
      }

      if (returns) {
        dispatch(setDateReturn(formattedDate))
      }
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
      <DatePicker
        onChange={handleDateChange}
        slots={{ textField: StyledTextField }}
        slotProps={{
          actionBar: {
            actions: ["cancel", "accept"],
          },
          textField: { variant: "outlined", sx: { bgcolor: "#ffffff", borderRadius: "30px", width: "320px" } },
          desktopPaper: { sx: { borderRadius: "30px", margin: "12px 0"} },
        }}
      />
    </LocalizationProvider>
  );
};
