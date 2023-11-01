import * as yup from 'yup';

export const insuranceProviderValidationSchema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().nullable(),
  phone_number: yup.string().nullable(),
  website: yup.string().nullable(),
  coverage_details: yup.string().nullable(),
});
