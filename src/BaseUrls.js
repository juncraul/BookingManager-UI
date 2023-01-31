import Environments from './Environments';

export const BASE_URL_MAP = {
    'https://bookingmanager-ui.azurewebsites.net': Environments.production,
    'https://bookingmanager-ui.azurewebsites.net/uat': Environments.uat,
    'https://bookingmanager-ui.azurewebsites.net/qa': Environments.qa,
    'https://bookingmanager-ui.azurewebsites.net/dev': Environments.development
  };

export const API_BASE_URL_MAP = {
  BookingManagerBackEnd: {
    [Environments.production]:'https://bookingmanager-backend.azurewebsites.net',
    [Environments.uat]: 'https://bookingmanager-backend.azurewebsites.net',
    [Environments.qa]: 'https://bookingmanager-backend.azurewebsites.net',
    [Environments.development]:'https://bookingmanager-backend.azurewebsites.net',
    [Environments.local]: 'https://localhost:7221'
  },
};
