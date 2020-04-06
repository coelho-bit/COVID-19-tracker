const axios = require('axios');
const base_URL = 'https://covid19.mathdro.id/api';
const { dataFormat } = require('../format');

module.exports = {
    async index(req, res) {
        const apiResponse = await axios.get(`${base_URL}`);
        const countries = await axios.get(`${base_URL}/countries`);
        const data = dataFormat(apiResponse);
        const countriesList = []

        countries.data.countries.forEach(el => countriesList.push(el.name))
        res.json({data, countriesList});
    }
}