import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete, { autocompleteClasses } from "@mui/material/Autocomplete";
import { ruCountries } from "./countries";
import { Popper, styled } from "@mui/material";

const StyledPopper = styled(Popper)({
  [`& .${autocompleteClasses.paper}`]: {
    margin: "12px 0",
    borderRadius: "30px",
    fontFamily: "Raleway",
    fontSize: "14px",
    lineHeight: "18px",
    color: "#06266f",
    fontWeight: 500,
  },
  [`& .${autocompleteClasses.listbox}`]: {
    maxHeight: "20vh",
  },
});

const StyledTextField = styled(TextField)({
  [`& .${autocompleteClasses.input}`]: {
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

export const CountrySelect = () => {
  return (
    <Autocomplete
      sx={{
        width: 400,
        marginTop: "42px",
      }}
      options={ruCountries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      PopperComponent={StyledPopper}
      renderOption={(props, option) => (
        <Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            alt="country flag"
          />
          {option.label}
        </Box>
      )}
      renderInput={(params) => (
        <StyledTextField
          {...params}
          variant={"outlined"}
          name="country"
          sx={{
            bgcolor: "#ffffff",
            borderRadius: "30px",
          }}
          placeholder="Начните вводить название страны"
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
    />
  );
};
