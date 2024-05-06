import { Box, SxProps } from "@mui/material";

import { SelectInput, TextInput } from "../../components";
import { useDispatch, useSelector } from "../../hooks/redux";
import {
  selectFilters,
  setCompanyName,
  setExperience,
  setLocation,
  setMode,
  setRole,
} from "../../store/filters-slice";

const experiences = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const modes = ["Remote", "In-office"];

export type FiltersProps = {
  sx?: SxProps;
};

export const Filters = ({ sx }: FiltersProps) => {
  const dispatch = useDispatch();
  const { experience, companyName, location, mode, role } =
    useSelector(selectFilters);

  return (
    <Box component="section" sx={sx}>
      <SelectInput
        placeholder="Experience"
        options={experiences}
        value={experience}
        onChange={(value) => dispatch(setExperience(value))}
      />

      <TextInput
        placeholder="Company Name"
        value={companyName}
        onChange={(value) => dispatch(setCompanyName(value))}
      />

      <TextInput
        placeholder="Location"
        value={location}
        onChange={(value) => dispatch(setLocation(value))}
      />

      <SelectInput
        placeholder="Remote"
        options={modes}
        value={mode}
        onChange={(value) => dispatch(setMode(value))}
      />

      <TextInput
        placeholder="Role"
        value={role}
        onChange={(value) => dispatch(setRole(value))}
      />
    </Box>
  );
};
