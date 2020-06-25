import API from "./config";

export const get = async (url, config) => {
    try{
        const response = await API.get(url, config);
        return response.data;
    }
    catch(err) {
        console.log(err.data);
        return Promise.reject(err.data);
    }
}