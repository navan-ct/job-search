import { Typography } from "@mui/material";

type PlaceholderProps = {
  value: string;
};

export const Placeholder = ({ value }: PlaceholderProps) => (
  <Typography
    component="span"
    sx={{
      color: "#808080",
      fontSize: "0.75rem",
    }}
  >
    {value}
  </Typography>
);
