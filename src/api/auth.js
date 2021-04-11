import http from './http';
// import store from '@/store/auth';
import * as member from "@/api/member";
export async function login(userEmail, userPassword){
   await http.post('/api/v1/login', {
        userEmail,
        userPassword
    }).then(response => {
       if(response.status === 200){
           console.log("토큰 저장");
           member.setToken(response.data.jwt, response.data.refreshJwt);

       }
       console.log(response.data.jwt);
       console.log(response.data.refreshJwt);
       return response;
   }).catch(error => {
       alert(error.response.data.message);
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
        login(userEmail, password)
    }).catch(error => {
        alert(error.response.data.message);
    })
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

