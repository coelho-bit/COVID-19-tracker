const axios = require('axios');
const base_URL = 'https://covid19.mathdro.id/api';
const { dataFormat } = require('../format');

module.exports = {
    async search(req, res) {
        const { country } = req.params;
        const apiResponse = await axios.get(`${base_URL}/countries/${country}`);
        const data = dataFormat(apiResponse);
        
        res.json({country, data});
    }
}