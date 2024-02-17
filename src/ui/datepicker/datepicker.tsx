import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "dayjs/locale/ru.js";
import { styled, TextFieldProps } from "@mui/material";
import TextField from "@mui/material/TextField";

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

export const Datepicker = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
      <DatePicker
        slots={{ textField: StyledTextField }}
        slotProps={{
          actionBar: {
            actions: ["cancel", "accept"],
          },
          textField: { variant: "outlined", sx: { bgcolor: "#ffffff", borderRadius: "30px", width: "400px" } },
          desktopPaper: { sx: { borderRadius: "30px", margin: "12px 0"} },
        }}
      />
    </LocalizationProvider>
  );
};
