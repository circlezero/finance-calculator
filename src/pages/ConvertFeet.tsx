import { Box, Input, Typography } from "@mui/material";
import React, { FC, useState } from "react";

const ConvertFeet: FC = () => {
  const [feetValue, setFeetValue] = useState<string>("");
  const [meterValue, setMeterValue] = useState<string>("");

  const regex = /[^0-9]/g;

  const onFeetValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(regex, "");
    setFeetValue(value);
    setMeterValue((Number(value) * 3.305785).toString());
  };

  const onMeterValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(regex, "");
    setMeterValue(value);
    setFeetValue((Number(value) * 0.3025).toString());
  };

  return (
    <Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box display="flex" mb="20px">
          <Input value={feetValue} onChange={onFeetValueChange} type="text" />
          <Typography>평</Typography>
        </Box>
        <Box display="flex">
          <Input type="text" value={meterValue} onChange={onMeterValueChange} />
          <Typography>
            m<sup>2</sup>
          </Typography>
        </Box>
      </Box>
      <Typography mt="32px">전용면적이 실평수입니다.</Typography>
    </Box>
  );
};

export default ConvertFeet;
