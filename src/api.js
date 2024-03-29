import axios from 'axios';

const api = axios.create({
  baseURL: `https://htmlacademy-react-2.appspot.com/six-cities`,
  timeout: 5000,
  withCredentials: true
});

const ConfigureApi = () => {
  const onSuccess = (response) => response;
  const onFail = (response) => response;

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export {api};

export default ConfigureApi;
