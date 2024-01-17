import { useFormContext } from "react-hook-form";

import { Container, Stack, TextField } from "@mui/material";

import { RHFAutocomplete } from "../../components/RHFAutocomplete";
import { RHFCheckbox } from "../../components/RHFCheckbox";
import { RHFDateRangePicker } from "../../components/RHFDateRangePicker";
import { RHFDateTimePicker } from "../../components/RHFDateTimePicker";
import { RHFRadioGroup } from "../../components/RHFRadioGroup";
import { RHFToggleButtonGroup } from "../../components/RHFToggleButtonGroup";
import {
  useGenders,
  useLanguages,
  useSkills,
  useStates,
} from "../services/queries";
import { Schema } from "../types/schema";

export function Page() {
  const statesQuery = useStates();
  const languagesQuery = useLanguages();
  const gendersQuery = useGenders();
  const skillsQuery = useSkills();

  const {
    register,
    formState: { errors },
  } = useFormContext<Schema>();

  return (
    <Container maxWidth="sm">
      <Stack sx={{ gap: 2 }}>
        <TextField
          {...register("name")}
          label="Name"
          fullWidth
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          {...register("email")}
          label="Email address"
          fullWidth
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <RHFAutocomplete<Schema>
          name="states"
          options={statesQuery.data}
          label="States"
        />
        <RHFToggleButtonGroup<Schema>
          options={languagesQuery.data}
          name="languagesSpoken"
        />
        <RHFRadioGroup<Schema>
          name="gender"
          options={gendersQuery.data}
          label="Gender"
        />
        <RHFCheckbox<Schema>
          name="skills"
          options={skillsQuery.data}
          label="Skills"
        />
        <RHFDateTimePicker<Schema>
          name="registrationDateAndTime"
          label="Registration Date & Time"
        />
        <RHFDateRangePicker<Schema> name="formerEmploymentPeriod" />
      </Stack>
    </Container>
  );
}
