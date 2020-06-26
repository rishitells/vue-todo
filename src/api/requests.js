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

export const put = (url, data, config) => {
    return API.put(url, data, config).then(response => {
        return response.data;
    }, err => {
        console.log(err.response);
        throw err.response;
    });
}

export const deleteReq = (url, config) => {
    return API.delete(url, config).then(response => {
        return response.data;
    }, err => {
        console.log(err.response);
        throw err.response;
    });
}