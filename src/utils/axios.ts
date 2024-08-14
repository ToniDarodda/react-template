import axios, {AxiosInstance} from 'axios';

import { BACKEND_URL } from '../env/env';

export const Fetch: AxiosInstance = axios.create({
  baseURL: BACKEND_URL,
  timeout: 5000,
  timeoutErrorMessage:
    'Request timeout there is maybe a problem with the server!',
  withCredentials: true,
});

