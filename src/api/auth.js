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
           console.log(response.data.jwt);
           console.log(response.data.refreshJwt);
           // router.push("/");
           return response;
       }

   }).catch(error => {
       console.log(error);
   })
}

export async function logout(jwt, refreshJwt){
    await http.post("/api/v1/logout", {
        jwt,
        refreshJwt
    }).then(async response => {
        console.log("정상적으로 로그아웃!", response);
        await removeTokens();
        router.go(0);
    }).catch(error => {
        console.log("로그아웃 하는데 문제 발생", error);
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


export async function findPassword(userEmail, userNickname){
    await http.post('/api/v1/findPassword', {
        userEmail,
        userNickname
    }).then(response => {
        if(response.status === 200){
            console.log(response);
            alert("이메일을 확인해주세요.");
        }
        router.go(-1);
        return response;
    });
}

export async function resetPasswordUsingToken(token, newPassword){
    await http.post('/api/v1/resetPasswordUsingToken', {
        token,
        newPassword
    }).then(response => {
        if(response.status === 200){
            alert("비밀번호가 재설정 되었습니다.");
            router.push('/login');
        }
        return response;
    }).catch(error => {
        console.log(error);
    })
}

// eslint-disable-next-line no-unused-vars
export function setToken(token, refreshToken) {
    localStorage.setItem('token', token);
    localStorage.setItem("refreshToken", refreshToken);
}
export function getToken(){

    if(localStorage.getItem("token") != null){
        console.log("auth.getToken");
        this.token = localStorage.getItem("token");
        return this.token;
    }
    else {
        removeTokens();
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
        removeTokens();
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

