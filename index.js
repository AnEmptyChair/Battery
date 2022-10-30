require('dotenv').config() // Loading Environment Varibles to the entry point

// Importing Express
const express = require('express');

// Initilizing variable, 'app' via express
const app = express();

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
