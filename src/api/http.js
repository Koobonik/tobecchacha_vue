import axios from 'axios';
import * as member from "@/api/member";
const instance = axios.create({
    baseURL: process.env.VUE_APP_API
});

instance.interceptors.request.use(function (config){
    if(member.getToken() !== null){
        config['headers'] = {
            Authorization : `${member.getToken()}`
        }
    }
    return config;
})
export default instance;


