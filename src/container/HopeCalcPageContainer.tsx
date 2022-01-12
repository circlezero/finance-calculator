import { Box, Container, SelectChangeEvent } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { HopeConditionForm, HopeResultForm } from "../components";

export type PeriodType = "month" | "year";

export const HopeCalcPageConatiner = () => {
  // 종잣돈
  const [seedMoney, setSeedMoney] = useState<number>(500);
  const [period, setPeriod] = useState<PeriodType>("month");
  const [percent, setPercent] = useState<number>(10);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [hopeResult, setHopeResult] = useState<number>(0);

  const handleChangePeriod = (event: SelectChangeEvent) => {
    const targetValue = event.target.value as PeriodType;
    if (targetValue === "month") {
      setPeriod(targetValue);
    } else {
      setPeriod("year");
    }
  };

  const handleChangeSeedMoney = (event: ChangeEvent<HTMLInputElement>) => {
    setSeedMoney(Number(event.target.value));
  };

  const handleChangePercent = (event: ChangeEvent<HTMLInputElement>) => {
    setPercent(Number(event.target.value));
  };

  const handleHopeResult = () => {};
  const handleOpenResult = () => setShowResult(true);
  const handleHideResult = () => setShowResult(false);
  const calcResult = () => {};

  return (
    <Container maxWidth='lg'>
      <Box sx={{ height: "100vh", width: "100%" }}>
        <HopeConditionForm
          seedMoney={seedMoney}
          percent={percent}
          period={period}
          onChangeSeedMoney={handleChangeSeedMoney}
          onChangePeriod={handleChangePeriod}
          onChangeMultiple={handleChangePeriod}
          onChangePercent={handleChangePercent}
          onOpenResult={handleOpenResult}
        />
        {showResult && <HopeResultForm result={hopeResult} />}
      </Box>
    </Container>
  );
};
