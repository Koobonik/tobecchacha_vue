import http from './http';

export async function getEducationPageSize(page, size){
    return http.get(`/api/v1/education/getEducation/${page}/${size}`).then(response => {
        console.log(response.data);
        return response.data;
    }).catch(error => {
        console.log(error);
        return null;
    })
}
export async function getEducationDetail(id){
    return http.get(`/api/v1/education/getEducationDetail/${id}`).then(response => {
        console.log(response.data);
        return response.data;
    }).catch(error => {
        console.log(error);
        return null;
    })
}
