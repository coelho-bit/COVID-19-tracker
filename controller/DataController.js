const axios = require('axios');
const base_URL = 'https://covid19.mathdro.id/api';
const { dataFormat } = require('../format');

module.exports = {
    async index(req, res) {
        const apiResponse = await axios.get(`${base_URL}`);
        const countries = await axios.get(`${base_URL}/countries`);
        const data = dataFormat(apiResponse);
        const countriesList = []

        const info = ['https://coelhocovid19tracker.herokuapp.com // to get the world data and list of country that is being tracked', 'https://coelhocovid19tracker.herokuapp.com/search/[CountryName] // search single Country data']

        countries.data.countries.forEach(el => countriesList.push(el.name))
        res.json({info, data, countriesList});
    }
}