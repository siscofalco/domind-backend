const cors = require('cors');

module.exports = (app) => {
  app.use(
    cors({
      credentials: true, 
      origin: [
        process.env.PUBLIC_DOMAIN, 
        'http://domind.herokuapp.com',
        'https://domind.herokuapp.com' 
      ]
    })
  )
}