const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 5500;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'frontend')));

// Handle the form submission
app.post('/api/submit-form', (req, res) => {
    const { name, email, mobile, service, message } = req.body;

    console.log('Received new project request:');
    console.log(`- Full Name: ${name}`);
    console.log(`- Email: ${email}`);
    console.log(`- Mobile: ${mobile}`);
    console.log(`- Service: ${service}`);
    console.log(`- Project Details: ${message}`);

    res.status(200).json({ message: 'Request submitted successfully!', status: 'success' });
});

// For any other routes, serve index.html (important for client-side routing)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
