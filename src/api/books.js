import http from './http';

export async function getBooksPageSize(page, size){
    return http.get(`/api/v1/books/getBooks/${page}/${size}`).then(response => {
        console.log(response.data);
        return response.data;
    }).catch(error => {
        console.log(error);
        return null;
    })
}
export async function getBookDetail(id){
    return http.get(`/api/v1/books/getBookDetail/${id}`).then(response => {
        console.log(response.data);
        return response.data;
    }).catch(error => {
        console.log(error);
        return null;
    })
}
