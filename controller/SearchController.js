const axios = require('axios');
const base_URL = 'https://covid19.mathdro.id/api';
const { dataFormat } = require('../format');

module.exports = {
    async search(req, res) {
        const { country } = req.params;
        const apiResponse = await axios.get(`${base_URL}/countries/${country}`);
        const data = dataFormat(apiResponse);
        
        const info = ['https://coelhocovid19tracker.herokuapp.com // to get the world data and list of country that is being tracked', 'https://coelhocovid19tracker.herokuapp.com/search/[CountryName] // search single Country data']

        res.json({info, country, data});
    }
}