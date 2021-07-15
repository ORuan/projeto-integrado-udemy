import axios from 'axios';

const ApiCreate = async (method, endpoint, data) => {

    return axios({
        "baseURL": 'http://127.0.0.1:9000/',
        "method": method,
        "url": endpoint,
        "data": data,
        "headers": { 'Content-Type': 'application/json' },
    })
}

export default ApiCreate;