import axios from 'axios';
import * as auth from "@/api/auth";
const instance = axios.create({
    baseURL: process.env.VUE_APP_API
});

instance.interceptors.request.use(function (config){
    console.log(config.url);
    // console.log(config.baseURL+'/api/v1/findPassword');
    // if(config.url === '/api/v1/findPassword'){
    //     alert("이메일을 전송하였습니다.");
    // }
    if(auth.getToken() !== null){
        config['headers'] = {
            Authorization : `${auth.getToken()}`
        }
    }
    return config;
});

instance.interceptors.response.use(
    function (response) {
        /*
            http status가 200인 경우
            응답 성공 직전 호출됩니다.
            .then() 으로 이어집니다.
        */
        return response;
    },

    function (error) {
        if(error.response.status === 401){
            console.log("토큰 만료");
            //1. 리뉴얼 토큰 가져오자!
            auth.renewalToken(auth.getRefreshToken()).then(response => {
                auth.removeTokens();
                auth.setToken(response.data.jwt, response.data.refreshJwt);
            }).catch(error => {
                console.log(error.response);
                return null;
            });
            //2. 그리고 다시 세팅해주자
        }
        else if(error.response.status === 409){
            alert(error.response.data.message);
        }
        /*
            http status가 200이 아닌 경우
            응답 에러 직전 호출됩니다.
            .catch() 으로 이어집니다.
        */
        return Promise.reject(error);
    }
);
export default instance;


