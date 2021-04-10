import http from './http';
export async function login(userid, password){
    return http.post('/login', {
        userid,
        password
    });
}