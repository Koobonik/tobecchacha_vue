import http from './http';
export async function getMembers(){
    return http.post('/pwmw/api/v1/getAllMember');
}