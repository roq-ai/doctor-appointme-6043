import { PatientInterface } from 'interfaces/patient';
import { GetQueryInterface } from 'interfaces';

export interface InsuranceProviderInterface {
  id?: string;
  name: string;
  address?: string;
  phone_number?: string;
  website?: string;
  coverage_details?: string;
  created_at?: any;
  updated_at?: any;
  patient?: PatientInterface[];

  _count?: {
    patient?: number;
  };
}

export interface InsuranceProviderGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  address?: string;
  phone_number?: string;
  website?: string;
  coverage_details?: string;
}
