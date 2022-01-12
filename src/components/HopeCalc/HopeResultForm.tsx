import { FormControl, InputAdornment, TextField } from "@mui/material";

interface HopeResultModel {
  result: number;
}

export const HopeResultForm = ({ result }: HopeResultModel) => {
  return (
    <FormControl fullWidth sx={{ m: 3 }}>
      <TextField
        label='나의 자산'
        id='future-my-money'
        value={result}
        InputProps={{
          readOnly: true,
          endAdornment: <InputAdornment position='end'>만원</InputAdornment>,
        }}
      />
    </FormControl>
  );
};
