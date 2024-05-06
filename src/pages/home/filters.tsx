import { Box, SxProps } from "@mui/material";

import { SelectField } from "../../components";
import { useDispatch, useSelector } from "../../hooks/redux";
import {
  selectFilters,
  setExperience,
  setMode,
} from "../../store/filters-slice";

const experiences = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const modes = ["Remote", "In-office"];

export type FiltersProps = {
  sx?: SxProps;
};

export const Filters = ({ sx }: FiltersProps) => {
  const dispatch = useDispatch();
  const { experience, mode } = useSelector(selectFilters);

  return (
    <Box component="section" sx={sx}>
      <SelectField
        placeholder="Experience"
        options={experiences}
        value={experience}
        onChange={(value) => dispatch(setExperience(value))}
      />
      <SelectField
        placeholder="Remote"
        options={modes}
        value={mode}
        onChange={(value) => dispatch(setMode(value))}
      />
    </Box>
  );
};
