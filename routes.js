const express = require('express');
const routes = express.Router();
const DataController = require('./controller/DataController');
const SearchController = require('./controller/SearchController');

routes.get('/', DataController.index);
routes.get('/search/:country', SearchController.search);

module.exports = routes