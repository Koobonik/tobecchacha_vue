import http from './http';
// import store from '@/store/auth';
import * as auth from "@/api/auth";
import router from "@/router";

export async function login(userEmail, userPassword){
   await http.post('/api/v1/login', {
        userEmail,
        userPassword
    }).then(response => {
       if(response.status === 200){
           console.log("토큰 저장");
           auth.setToken(response.data.jwt, response.data.refreshJwt);
       }
       console.log(response.data.jwt);
       console.log(response.data.refreshJwt);
       router.go(-1);
       return response;
   }).catch(error => {
       console.log(error);
   })
}

export async function signup(userEmail, password, nickName, emailCode){
    http.post('/api/v1/signUp', {
        userEmail,
        password,
        nickName,
        emailCode
    }).then(response => {
        console.info(response);
        // 바로 로그인 로직 실행
        login(userEmail, password, "/");
    }).catch(error => {
        console.log(error);
        // alert(error.response.data.message);
    })
}
// eslint-disable-next-line no-unused-vars
export function setToken(token, refreshToken) {
    localStorage.setItem('token', token);
    localStorage.setItem("refreshToken", refreshToken);
}
export function getToken(){
    console.log("토큰 가져오기123");
    if(localStorage.getItem("token") != null){
        this.token = localStorage.getItem("token");
        console.log("토큰 가져오기 : ", this.token);
        return this.token;
    }
    else {
        console.log("토큰 삭제");
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        return null;
    }
}


export function getRefreshToken(){
    console.log("리프레쉬 토큰 가져오기");
    if(localStorage.getItem("refreshToken") != null){
        this.refreshToken = localStorage.getItem("refreshToken");
        console.log("리프레쉬 토큰 가져오기 : ", this.refreshToken);
        return this.refreshToken;
    }
    else {
        console.log("토큰 삭제");
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
    }
}

export function removeTokens(){
    console.log("토큰 삭제");
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
}


export async function sendEmailForAuthEmail(recipient){
    console.log(recipient);
    await http.post('/api/v1/sendEmailForAuthEmail', {
        recipient,
    }).then(response => {
        alert(response.data.message);
       return response;
    }).catch(error => {
       alert(error.response.data.message);
    });
}

export async function renewalToken(refreshJwt){
    console.log(refreshJwt);
    await http.get('/api/v1/renewalToken?token='+refreshJwt).then(response => {
        alert(response.data.message);
        return response;
    }).catch(error => {
        console.log(error);
        // alert(error.response.data.message);
    });
}

