import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { countries } from "#ui/country-select/countries";

export const CountrySelect = () => {
  return (
    <Autocomplete
      sx={{ width: 400, marginTop: '42px' }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
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
        <TextField
          {...params}
          name="country"
          sx={{
            bgcolor: "#ffffff",
            borderRadius: "30px",
          }}
          placeholder="Начните вводить название"
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
    />
  );
};
