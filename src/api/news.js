import http from './http';

export async function getNewsPageSize(page, size){
    return http.get(`/api/v1/news/getNews/${page}/${size}`).then(response => {
        console.log(response.data);
        return response.data;
    }).catch(error => {
        console.log(error);
        return null;
    })
}
export async function getNewsDetail(id){
    return http.get(`/api/v1/news/getNewsDetail/${id}`).then(response => {
        console.log(response.data);
        return response.data;
    }).catch(error => {
        console.log(error);
        return null;
    })
}
