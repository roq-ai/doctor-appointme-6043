import * as yup from 'yup';

export const patientValidationSchema = yup.object().shape({
  medical_history: yup.string().nullable(),
  emergency_contact: yup.string().nullable(),
  insurance_provider_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
  preferred_healthcare_provider_id: yup.string().nullable().required(),
});
