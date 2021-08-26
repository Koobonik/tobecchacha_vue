import http from './http';

export async function getEtcPageSize(page, size){
    return http.get(`/api/v1/etc/getEtc/${page}/${size}`).then(response => {
        console.log(response.data);
        return response.data;
    }).catch(error => {
        console.log(error);
        return null;
    })
}
export async function getEtcDetail(id){
    return http.get(`/api/v1/etc/getEtcDetail/${id}`).then(response => {
        console.log(response.data);
        return response.data;
    }).catch(error => {
        console.log(error);
        return null;
    })
}
