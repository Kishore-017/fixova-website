const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5500;

// Middleware to parse JSON bodies from incoming requests
app.use(bodyParser.json());

// Middleware to enable CORS for all origins
app.use(cors());

// Define the POST endpoint that the front-end form will submit to
app.post('/api/submit-form', (req, res) => {
    // The form data is available in req.body
    const { name, email, mobile, service, message } = req.body;

    console.log('Received new project request:');
    console.log(`- Full Name: ${name}`);
    console.log(`- Email: ${email}`);
    console.log(`- Mobile: ${mobile}`);
    console.log(`- Service: ${service}`);
    console.log(`- Project Details: ${message}`);

    // You can add your business logic here, such as:
    // - Saving the data to a database
    // - Sending an email notification
    // - Validating the form fields

    // Send a success response back to the client
    res.status(200).json({ message: 'Request submitted successfully!', status: 'success' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});