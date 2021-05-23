import http from './http';

export async function getGalleryPageSize(page, size){
    return http.get(`/api/v1/gallery/getGallery/${page}/${size}`).then(response => {
        console.log(response.data);
        return response.data;
    }).catch(error => {
        console.log(error);
        return null;
    })
}
export async function getGalleryDetail(id){
    return http.get(`/api/v1/gallery/getGalleryDetail/${id}`).then(response => {
        console.log(response.data);
        return response.data;
    }).catch(error => {
        console.log(error);
        return null;
    })
}
