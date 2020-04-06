const express = require('express')
const PORT = process.env.PORT || 5000
const routes = require('./routes');

express()
  .use(routes)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
