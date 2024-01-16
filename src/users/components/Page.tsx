import { useFormContext } from "react-hook-form";

import { Container, Stack, TextField } from "@mui/material";

import { RHFAutocomplete } from "../../components/RHFAutocomplete";
import { useStates } from "../services/queries";
import { Schema } from "../types/schema";

export function Page() {
  const statesQuery = useStates();

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
      </Stack>
    </Container>
  );
}
