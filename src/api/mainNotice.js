import http from './http';

export async function getMainNoticePageSize(page, size){
    return http.get(`/api/v1/mainNotice/getMainNotice/${page}/${size}`).then(response => {
        console.log(response.data);
        return response.data;
    }).catch(error => {
        console.log(error);
        return null;
    })
}
export async function getMainNoticeDetail(id){
    return http.get(`/api/v1/mainNotice/getMainNoticeDetail/${id}`).then(response => {
        console.log(response.data);
        return response.data;
    }).catch(error => {
        console.log(error);
        return null;
    })
}
export async function getCurrentIds(){
    return http.get(`/api/v1/mainNotice/getCurrentIds`).then(response => {
        console.log(response.data);
        return response.data;
    }).catch(error => {
        console.log(error);
        return null;
    })
}

