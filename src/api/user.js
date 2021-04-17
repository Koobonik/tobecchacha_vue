import http from './http';

export async function getMyProfile(){
    return http.get('/api/v1/getProfile').then(response => {
        return response.data.userNickname;
    }).catch(error => {
        console.log(error);
        return null;
    })
}
