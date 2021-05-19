const cors = require('cors');

module.exports = (app) => {
  app.use(
    cors({
      credentials: true, 
      origin: [
        process.env.PUBLIC_DOMAIN, 
        'http://your-heroku-app-name.herokuapp.com',
        'https://your-heroku-app-name.herokuapp.com' 
      ]
    })
  )
}