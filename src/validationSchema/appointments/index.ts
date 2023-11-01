import * as yup from 'yup';

export const appointmentValidationSchema = yup.object().shape({
  appointment_date: yup.date().nullable(),
  reason_for_visit: yup.string().nullable(),
  appointment_status: yup.string().nullable(),
  notes: yup.string().nullable(),
  patient_id: yup.string().nullable().required(),
  healthcare_provider_id: yup.string().nullable().required(),
});
