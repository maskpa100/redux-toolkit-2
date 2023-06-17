import axios from 'axios';



const noAuthAPI = axios.create({
    baseURL: 'http://maskpa.ru/api/'
});
const AuthAPI = axios.create({
    withCredentials: true,
    crossDomain: true,
    baseURL: 'http://maskpa.ru/api/'
});


export const searchAPI = {
    getImages(page,count,words,format,orientations) {
        return noAuthAPI.get('Pages/search.php?page='+page+'&count='+count+"&words="+words+"&format="+format+"&orientations="+orientations)
            .then(response => {
                return response.data;
            });
    }
}