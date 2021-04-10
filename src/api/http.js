import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://pwmw.xyz:8080'
})
export default instance;