import {
  Button,
  FormControl,
  InputAdornment,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { ChangeEvent } from "react";
import { PeriodType } from "../../container/HopeCalcPageContainer";

type ChangeEventType = (e: ChangeEvent<HTMLInputElement>) => void;
interface HopeConditionModel {
  seedMoney: number;
  period: PeriodType;
  percent: number;
  onChangeSeedMoney: ChangeEventType;
  onChangePercent: ChangeEventType;
  onChangePeriod: (e: SelectChangeEvent) => void;
  onChangeMultiple: (e: SelectChangeEvent) => void;
  onOpenResult: () => void;
}
export const HopeConditionForm = ({
  seedMoney,
  period,
  percent,
  onChangeSeedMoney,
  onChangePeriod,
  onChangeMultiple,
  onChangePercent,
  onOpenResult,
}: HopeConditionModel) => {
  return (
    <Box>
      <FormControl sx={{ m: 1, width: "25ch" }} variant='outlined'>
        <TextField
          label='종잣돈'
          id='outlined-adornment-weight'
          type='number'
          value={seedMoney}
          onChange={onChangeSeedMoney}
          InputProps={{
            endAdornment: <InputAdornment position='end'>만원</InputAdornment>,
          }}
        />
      </FormControl>
      을 가지고
      <FormControl sx={{ m: 1, width: "10ch" }}>
        <TextField
          id='period-number'
          value={10}
          onChange={() => {}}
          type='number'
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: "10ch" }}>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={period}
          onChange={onChangePeriod}
        >
          <MenuItem value={"month"}>월</MenuItem>
          <MenuItem value={"year"}>년</MenuItem>
        </Select>
      </FormControl>
      동안
      <FormControl sx={{ m: 1, width: "20ch" }}>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={period}
          onChange={onChangeMultiple}
        >
          <MenuItem value={"month"}>월복리</MenuItem>
          <MenuItem value={"year"}>연복리</MenuItem>
        </Select>
      </FormControl>
      로
      <FormControl sx={{ m: 1, width: "10ch" }} variant='outlined'>
        <TextField
          id='outlined-adornment-weight'
          type='number'
          value={percent}
          onChange={onChangePercent}
          InputProps={{
            endAdornment: <InputAdornment position='end'>%</InputAdornment>,
          }}
        />
      </FormControl>
      의 수익을 내면 금액이 얼마가 되는가?
      <Button variant='contained' onClick={onOpenResult}>
        내 미래 자산 공개
      </Button>
    </Box>
  );
};
