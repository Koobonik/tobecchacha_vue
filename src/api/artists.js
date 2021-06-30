import http from './http';

export async function getArtistsPageSize(page, size){
    return http.get(`/api/v1/artists/getArtists/${page}/${size}`).then(response => {
        console.log(response.data);
        return response.data;
    }).catch(error => {
        console.log(error);
        return null;
    })
}
export async function getArtistsDetail(id){
    return http.get(`/api/v1/artists/getArtistsDetail/${id}`).then(response => {
        console.log(response.data);
        return response.data;
    }).catch(error => {
        console.log(error);
        return null;
    })
}
