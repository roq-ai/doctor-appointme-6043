import * as yup from 'yup';

export const healthcareProviderValidationSchema = yup.object().shape({
  specialty: yup.string().nullable(),
  license_number: yup.string().nullable(),
  years_of_experience: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
