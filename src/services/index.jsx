import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://reqres.in/api/users',
  });
  axiosInstance.interceptors.request.use((request) => {
    const accessToken = localStorage.getItem('accessToken')
    if(accessToken){
      request.headers.Authorization = `Bearer ${accessToken}`
    }
    return request
  })
  axiosInstance.interceptors.response.use((response) => response.data)
  export default axiosInstance
