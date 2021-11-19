import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://inline-api.herokuapp.com'
})

instance.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

export default instance