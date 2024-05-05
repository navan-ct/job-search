import { FormControl, MenuItem, Select, Typography } from "@mui/material";
import { useRef, useState } from "react";

import { ArrowButton } from "./arrow-button";
import { Placeholder } from "./placeholder";
import { Value } from "./value";

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
    <FormControl sx={{ position: "relative" }}>
      {value ? (
        <Typography
          component="span"
          sx={{
            color: "#000",
            fontSize: "0.8125rem",
            fontWeight: "400",
            position: "absolute",
            top: "0",
            left: "0",
            transform: "translateY(-100%)",
          }}
        >
          {placeholder}
        </Typography>
      ) : null}
      <Select
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
        sx={{
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
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
