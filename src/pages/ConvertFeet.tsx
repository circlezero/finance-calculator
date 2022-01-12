import React, { FC, useState } from "react";

const ConvertFeet: FC = () => {
  const [feetValue, setFeetValue] = useState("");
  const [meterValue, setMeterValue] = useState("");

  const onFeetValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /[^0-9]/g;
    const value = e.target.value.replace(regex, "");
    setFeetValue(value);
    setMeterValue((Number(value) * 3.305785).toString());
  };

  const onMeterValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /[^0-9]/g;
    const value = e.target.value.replace(regex, "");
    setMeterValue(value);
    setFeetValue((Number(value) * 0.3025).toString());
  };

  return (
    <div>
      <input
        value={feetValue}
        onChange={onFeetValueChange}
        placeholder="평"
        type="text"
      />
      <input
        type="text"
        value={meterValue}
        onChange={onMeterValueChange}
        placeholder="m2"
      />
    </div>
  );
};

export default ConvertFeet;
