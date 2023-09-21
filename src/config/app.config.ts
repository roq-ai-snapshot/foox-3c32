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
  ownerRoles: ['Owner'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Owner', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Foox',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage applications', 'Manage worklog', 'Edit freelancer profile', 'Manage hirings'],
  ownerAbilities: ['Manage hiring data', 'Manage freelancer profiles', 'Manage worklogs', 'Manage user data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/03cb4bc7-6f1b-499e-836a-effc60d76314',
};
