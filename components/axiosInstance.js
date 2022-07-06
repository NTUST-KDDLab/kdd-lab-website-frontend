import axios from 'axios';
import { getSession } from 'next-auth/react';

let APIbaseURL;

if (process.env.NODE_ENV === 'production') {
  APIbaseURL = process.env.NEXT_PUBLIC_API_URL + '/api';
} else {
  APIbaseURL = 'http://localhost:1337/api';
}

const axiosInstance = axios.create({
  baseURL: APIbaseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

axiosInstance.interceptors.request.use(async (request) => {
  const session = await getSession();
  if (session) {
    request.headers.Authorization = `Bearer ${session.jwt}`;
  }
  return request;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(`error`, error);
  }
);

export default axiosInstance;
