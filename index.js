const express = require("express");
const path = require('path')
const app = express();

require("dotenv").config();
const port = process.env.PORT || 8080;

// const { CORS_ORIGIN } = process.env;
const cors = require("cors");
app.use(cors());

app.use(express.json());


const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

const journalRoutes = require("./routes/journalRoutes");
app.use("/api/journals", journalRoutes);

const scoreRoutes = require("./routes/scoreRoutes");
app.use("/api/scores", scoreRoutes);

const activityRoutes = require("./routes/activityRoutes");
app.use("/api/activities", activityRoutes);

const recommendRoutes = require("./routes/recommendRoutes");
app.use("/api/recommendations", recommendRoutes);


app.use(express.static(path.join(__dirname, 'build')));

// Handle all requests and send back the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const knex = require('knex')(require('./knexfile.js'));

knex.raw('SELECT 1')
  .then(() => {
    console.log('Connection successful!');
  })
  .catch(err => {
    console.error('Connection failed:', err);
  });


app.listen(port, () => {
  console.log(`running at http://localhost:${port}`);
});
