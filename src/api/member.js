import http from './http';
export async function getMembers(){
    return http.post('/pwmw/api/v1/getAllMember');
}

export function setToken() {
    localStorage.setItem('token', this.token);
}
export function getToken(){
    console.log("토큰 가져오기");
    if(localStorage.getItem("token") != null){
        this.token = localStorage.getItem("token");
        // getMyProfile(this.token).then(r => );
    }
    else {
        localStorage.removeItem('token')
    }
}
export async function getMyProfile(token){
    return http.post('/api/v1/getProfile', token);
}
