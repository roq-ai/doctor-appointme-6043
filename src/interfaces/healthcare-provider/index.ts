import { AppointmentInterface } from 'interfaces/appointment';
import { PatientInterface } from 'interfaces/patient';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface HealthcareProviderInterface {
  id?: string;
  specialty?: string;
  license_number?: string;
  years_of_experience?: number;
  user_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];
  patient?: PatientInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    appointment?: number;
    patient?: number;
  };
}

export interface HealthcareProviderGetQueryInterface extends GetQueryInterface {
  id?: string;
  specialty?: string;
  license_number?: string;
  user_id?: string;
  organization_id?: string;
}
