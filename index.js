const express = require('express')
const PORT = process.env.PORT || 5000
const DataController = require('./controller/DataController');
const SearchController = require('./controller/SearchController');

express()
  .get('/', DataController.index)
  .get('/country/:country', SearchController.search)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
