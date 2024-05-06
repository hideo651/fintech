import React from "react";

interface IDateInput = React.ComponentProps<"input"> & {
  label: string
}

interface ITeste {
  data: string;
}

const DateInput = ({ label }) => {
  return (
    <div>
      <label htmlFor=""></label>
      <input type="text" />
    </div>
  );
};

export default DateInput;
