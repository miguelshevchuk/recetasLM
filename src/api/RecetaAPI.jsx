import axios from 'axios';


const recetaApi = axios.create({
    baseURL: 'http://localhost:3001'
});

recetaApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'Authorization': localStorage.getItem('token')
    }

    return config;
})


export default recetaApi;