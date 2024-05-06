import { Box, TextField, Typography } from "@mui/material";

export type TextInputProps = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

export const TextInput = ({ placeholder, value, onChange }: TextInputProps) => (
  <Box sx={{ position: "relative" }}>
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
    <TextField
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      sx={{
        maxWidth: "10rem",
        "& .MuiInputBase-root": {
          height: "2.5rem",
        },
        "& .MuiInputBase-input": {
          color: "#000",
          fontSize: "0.8125rem",
          fontWeight: "400",
          lineHeight: "1.4375rem",
        },
      }}
    />
  </Box>
);
