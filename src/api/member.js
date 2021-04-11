import http from './http';
export async function getMembers(){
    return http.post('/pwmw/api/v1/getAllMember');
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
        this.refreshToken = localStorage.getItem("refreshToken");
        console.log("토큰 가져오기 : ", this.token);
        return this.token;
        // getMyProfile(this.token).then(r => );
    }
    else {
        console.log("토큰 삭제");
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
    }
}
export async function getMyProfile(token){
    return http.post('/api/v1/getProfile', token);
}
