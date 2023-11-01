import { AppointmentInterface } from 'interfaces/appointment';
import { InsuranceProviderInterface } from 'interfaces/insurance-provider';
import { UserInterface } from 'interfaces/user';
import { HealthcareProviderInterface } from 'interfaces/healthcare-provider';
import { GetQueryInterface } from 'interfaces';

export interface PatientInterface {
  id?: string;
  medical_history?: string;
  insurance_provider_id: string;
  user_id: string;
  preferred_healthcare_provider_id: string;
  emergency_contact?: string;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];
  insurance_provider?: InsuranceProviderInterface;
  user?: UserInterface;
  healthcare_provider?: HealthcareProviderInterface;
  _count?: {
    appointment?: number;
  };
}

export interface PatientGetQueryInterface extends GetQueryInterface {
  id?: string;
  medical_history?: string;
  insurance_provider_id?: string;
  user_id?: string;
  preferred_healthcare_provider_id?: string;
  emergency_contact?: string;
}
