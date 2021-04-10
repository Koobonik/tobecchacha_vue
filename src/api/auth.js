import http from './http';
import store from '@/store';
export async function login(userEmail, userPassword){
    const response = await http.post('/login', {
        userEmail,
        userPassword
    });

    if(response.status === 200){
        store.commit('auth/setToken', response.data.token);
    }
    return response;
}

export async function signup(userEmail, userPassword, userNickname, emailToken){
    return http.post('/signup', {
        userEmail,
        userPassword,
        userNickname,
        emailToken
    });
}