interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Medical Staff'],
  customerRoles: ['Patient'],
  tenantRoles: ['System Administrator', 'Healthcare Provider', 'Medical Staff', 'Insurance Provider'],
  tenantName: 'Organization',
  applicationName: 'Doctor Appointment System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage own patient profile',
    'Read appointment details',
    'Read healthcare provider information',
    'Read insurance provider information',
  ],
  ownerAbilities: [
    'Manage patient records',
    'Manage appointments',
    'Read healthcare provider information',
    'Read insurance provider information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/51893292-74db-443c-9464-71288c5fdd8e',
};
