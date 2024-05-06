import { Close } from "@mui/icons-material";
import { Box, ButtonBase, Typography } from "@mui/material";

type ValueProps = {
  value: string;
  buttonRef: React.RefObject<HTMLButtonElement>;
};

export const Value = ({ value, buttonRef }: ValueProps) => (
  <Box>
    <Typography
      component="span"
      sx={{
        color: "#333",
        marginRight: "1rem",
      }}
    >
      {value}
    </Typography>
    <ButtonBase ref={buttonRef} disableRipple>
      <Close
        className="x-close-icon"
        sx={{
          fill: "#ccc",
          width: "1.25rem",
          height: "1.25rem",
          ":hover": {
            fill: "#666",
          },
        }}
      />
    </ButtonBase>
  </Box>
);
