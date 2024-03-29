require('dotenv').config();
const express = require('express');

// DB config
require('./configs/db.config');

const app = express();

// Middleware config
require('./configs/middleware.config')(app);
require('./configs/cors.config')(app);

// Session config + Passport
require('./configs/session.config')(app);
require('./configs/passport.config')(app);

const authRouter = require('./routes/auth.routes');
const doctorRouter = require('./routes/doctor.routes');
const patientRouter = require('./routes/patient.routes');
const activityRouter = require('./routes/activity.routes');
const diaryRouter = require('./routes/diary.routes');
const sessionRouter = require('./routes/session.routes');
app.use('/api/auth', authRouter);
app.use('/api/doctor', doctorRouter);
app.use('/api/patient', patientRouter);
app.use('/api/activity', activityRouter);
app.use('/api/diary', diaryRouter);
app.use('/api/doctor-session', sessionRouter);

app.use((req, res, next) => {
  // If no previous routes match the request, send back the React app.
  res.sendFile(__dirname + "/public/index.html");
});

//  Catch 404 and respond with error message
app.use((req, res, next) => {
  return res.status(404).json({ message: "Not found"});
})

module.exports = app;