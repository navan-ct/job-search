import { Box } from "@mui/material";
import { useState } from "react";

import { SelectField } from "../../components";

const experiences = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export const Filters = () => {
  const [experience, setExperience] = useState<string | null>(null);

  return (
    <Box component="section">
      <SelectField
        placeholder="Experience"
        options={experiences}
        value={experience}
        onChange={setExperience}
      />
    </Box>
  );
};
