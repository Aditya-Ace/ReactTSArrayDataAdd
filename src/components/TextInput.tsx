import React from "react";

interface Props {
  type: string;
  placeholder?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export const TextInput: React.FC<Props> = ({
  type,
  placeholder,
  handleChange,
  value
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
    />
  );
};
