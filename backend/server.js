const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

// Enable CORS for all routes
app.use(cors());
app.use(bodyParser.json({ limit: '1mb' }));

// Define a sample invoice data
const setInvoiceData = {
  customer: {
    name: 'Customer A',
    address: 'September 2023',
  },
};

// Define an API route to fetch invoice data
app.get('/api/invoice', (req, res) => {
  res.json(setInvoiceData);
});

app.post('/api/baseString', (req, res) => {
  const { base64String } = req.body;

  if (base64String) {
    console.log('Received base64String:');
    console.log(pdfData);
    res.status(200).send('base64String received.');
  } else {
    res.status(400).send('Invalid base64String.');
  }
});

// Start your Express server
const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
