import http from './http';

export async function getMyProfile(){
    return http.get('/api/v1/getProfile').then(response => {
        // return response.data.userNickname;
        console.log(response);
        return null;
    }).catch(error => {
        console.log(error);
        return null;
    })
}
