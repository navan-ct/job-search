import { ExpandMore } from "@mui/icons-material";
import { Box, ButtonBase } from "@mui/material";

export type ArrowButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const ArrowButton = ({ onClick }: ArrowButtonProps) => (
  <ButtonBase
    onMouseDown={(event) => event.preventDefault()}
    onClick={onClick}
    disableRipple
    sx={{
      display: "flex",
      alignItems: "center",
      flexShrink: "0",
      width: "2.25rem",
      height: "100%",
      top: "0",
      right: "0",
      ":hover .x-arrow-icon": {
        fill: "#666",
      },
    }}
  >
    <Box
      sx={{
        width: "100%",
        height: "1.25rem",
        borderLeft: "1px solid #ccc",
      }}
    >
      <ExpandMore
        className="x-arrow-icon"
        sx={{
          fill: "#ccc",
          width: "1.25rem",
          height: "1.25rem",
        }}
      />
    </Box>
  </ButtonBase>
);
