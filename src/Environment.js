import { API_BASE_URL_MAP, BASE_URL_MAP } from './BaseUrls';
import Environments from './Environments';

export const environment = BASE_URL_MAP[window.location.host] || Environments.local;

export const apiBaseURLs = {
  BookingManagerBackEnd: API_BASE_URL_MAP.BookingManagerBackEnd[environment],
};
