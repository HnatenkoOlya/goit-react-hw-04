import axios from "axios"; 

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchPhotos = async search => {
    const ACCESS_KEY = "kPTQRqHhshXjVgZYxeCvTjMfKpHG3KCEkX4U642Ikvw"
    const response = await axios.get(`/search/photos`, {
        params: {
            query: search,
            client_id: ACCESS_KEY,
            per_page: 12,
        }
    });
    return response.data.results;
};