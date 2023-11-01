import { PatientInterface } from 'interfaces/patient';
import { HealthcareProviderInterface } from 'interfaces/healthcare-provider';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  patient_id: string;
  healthcare_provider_id: string;
  appointment_date?: any;
  reason_for_visit?: string;
  appointment_status?: string;
  notes?: string;
  created_at?: any;
  updated_at?: any;

  patient?: PatientInterface;
  healthcare_provider?: HealthcareProviderInterface;
  _count?: {};
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  patient_id?: string;
  healthcare_provider_id?: string;
  reason_for_visit?: string;
  appointment_status?: string;
  notes?: string;
}
