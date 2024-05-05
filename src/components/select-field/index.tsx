import { FormControl, MenuItem, Select, styled } from "@mui/material";
import { useRef, useState } from "react";

import { ArrowButton } from "./arrow-button";
import { Placeholder } from "./placeholder";
import { Value } from "./value";

const StyledSelect = styled<typeof Select<string>>(Select)(() => ({
  height: "2.5rem",
  "& .MuiSelect-select": {
    display: "flex",
    alignItems: "center",
    height: "100% !important",
    padding: "0 0.5rem !important",
  },
  "&.Mui-focused .x-arrow-icon": {
    fill: "#333",
  },
}));

export type SelectFieldProps = {
  placeholder: string;
  options: string[];
  value: string | null;
  onChange: (value: string | null) => void;
};

export const SelectField = ({
  placeholder,
  options,
  value,
  onChange,
}: SelectFieldProps) => {
  const selectField = useRef<HTMLInputElement | null>(null);
  const clearValueButton = useRef<HTMLButtonElement | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (event: React.SyntheticEvent<Element, Event>) => {
    if (clearValueButton.current?.contains(event.target as Node)) {
      onChange(null);
    } else setIsOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent<Element, Event>) => {
    if (clearValueButton.current?.contains(event.target as Node)) {
      onChange(null);
    } else setIsOpen(false);
  };

  const handleArrowButtonClick = () => {
    selectField.current?.focus?.();
    setIsOpen(true);
  };

  return (
    <FormControl>
      <StyledSelect
        inputRef={selectField}
        open={isOpen}
        onOpen={handleOpen}
        onClose={handleClose}
        value={value || ""}
        onChange={(event) => onChange(event.target.value)}
        displayEmpty
        renderValue={(value) =>
          value ? (
            <Value value={value} buttonRef={clearValueButton} />
          ) : (
            <Placeholder value={placeholder} />
          )
        }
        IconComponent={() => <ArrowButton onClick={handleArrowButtonClick} />}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};
