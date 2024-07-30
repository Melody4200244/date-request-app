const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to handle date submissions
app.post('/submit-date', (req, res) => {
  const { date, time, location } = req.body;
  console.log(`Date: ${date}, Time: ${time}, Location: ${location}`);
  res.send('Date and time received');
});

// Optional: Route to serve a simple message at root URL
app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
