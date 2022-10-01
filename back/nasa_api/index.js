const axios = require('axios');
const { NASA_API_BASE_URL} = require('./consts');

const getNASAData = async (route, startDate = '', endDate = '') => {
    let url = `${NASA_API_BASE_URL}${route}?${startDate && 'startDate=' + startDate}${endDate && '&endDate=' + endDate}`
    return axios.get(url).then(response => response.data);
};

module.exports = getNASAData;