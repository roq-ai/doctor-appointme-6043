import { HealthcareProviderInterface } from 'interfaces/healthcare-provider';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  tenant_id: string;
  healthcare_provider?: HealthcareProviderInterface[];

  _count?: {
    healthcare_provider?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  tenant_id?: string;
}
