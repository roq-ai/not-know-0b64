import * as yup from 'yup';

export const teamMemberValidationSchema = yup.object().shape({
  unique_code: yup.string().required(),
  user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
