import http from './http';
export async function getMembers(){
    return http.post('/pwmw/api/v1/getAllMember');
}


export async function getMyProfile(){
    return http.get('/api/v1/getProfile').then(response => {
        console.log(response.data.userNickname);
        return response.data.userNickname;
    }).catch(error => {
        console.log(error);
        return null;
    })
}
