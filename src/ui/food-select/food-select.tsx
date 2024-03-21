import styles from "./food-select.module.css";
import { menuClasses, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { setNutrition } from "../../redux/slices/quiz-slice";

export const FoodSelect = () => {
  const [food, setFood] = useState("");
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    setFood(event.target.value);
    dispatch(setNutrition(event.target.value))
  };

  return (
    <div className={styles.wrapper}>
      <p>Питание</p>
      <Select
        value={food}
        onChange={handleChange}
        displayEmpty
        MenuProps={{
          sx: {
            [`& .${menuClasses.paper}`]: {
              margin: "12px 0",
              borderRadius: "30px",
              fontFamily: "Raleway",
              fontSize: "14px",
              lineHeight: "18px",
              color: "#06266f",
              fontWeight: 500,
            },
          },
        }}
        sx={{
          width: "320px",
          bgcolor: "#ffffff",
          borderRadius: "30px",
          fontFamily: "Raleway",
          fontSize: "16px",
          lineHeight: "21px",
          color: "#06266f",
          fontWeight: 500,
          "& .MuiOutlinedInput-notchedOutline": {
            display: "none",
          },
        }}
      >
        <MenuItem value="" disabled>
          Выберите вариант из списка
        </MenuItem>
        <MenuItem value={"Без питания"}>Без питания</MenuItem>
        <MenuItem value={"Завтрак"}>Завтрак</MenuItem>
        <MenuItem value={"Полупансион"}>Полупансион</MenuItem>
        <MenuItem value={"Завтрак, обед и ужин"}>Завтрак, обед и ужин</MenuItem>
        <MenuItem value={"Всё включено"}>Всё включено</MenuItem>
      </Select>
    </div>
  );
};
