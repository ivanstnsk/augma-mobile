import Axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';

export const client = Axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Cache-Control': 'no-cache',
  },
});

const auth = {
  token: '',
};

export const saveToken = (token: string) => {
  if (!token) {
    return;
  }

  auth.token = token;

  Object.assign(client.defaults.headers, {
    Authorization: `Bearer ${token}`,
  });
};

export const removeToken = () => {
  delete client.defaults.headers.Authorization;
  delete auth.token;
};

export const getToken = () => {
  return auth.token;
};

export const handleResponseFulfilled = (response: AxiosResponse) => {
  return response.data;
};

export const handleResponseRejected = (requestError: AxiosError) => {
  if (requestError.response?.status === 401) {
    removeToken();
  }

  throw requestError;
};

export const handleRequestFulfilled = (request: AxiosRequestConfig) => {
  return {
    ...request,
    params: {
      ...request.params,
      // TODO: custom headers
    },
  };
};

client.interceptors.response.use(handleResponseFulfilled, handleResponseRejected);
client.interceptors.request.use(handleRequestFulfilled);
