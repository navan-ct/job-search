import { Button } from "@mui/material";

export type PrimaryButtonProps = {
  children: React.ReactNode;
};

export const PrimaryButton = ({ children }: PrimaryButtonProps) => (
  <Button
    variant="contained"
    disableElevation
    sx={{
      backgroundColor: "#55efc4",
      color: "#000",
      fontSize: "1rem",
      fontWeight: "400",
      lineHeight: "1.75",
      textTransform: "none",
      width: "100%",
      paddingY: "0.5rem",
      ":hover": {
        backgroundColor: "#55efc4",
      },
    }}
  >
    {children}
  </Button>
);
