import API from "./config";

export const get = (url, config) => {
    return API.get(url, config).then(response => {
        return response.data;
    }, err => {
        console.log(err.response);
        throw err.response;
    });
}

export const post = (url, data, config) => {
    return API.post(url, data, config).then(response => {
        return response.data;
    }, err => {
        console.log(err.response);
        throw err.response;
    });
}