// Loading Environment Varibles in the projects entry point.
import * as dotenv from 'dotenv';
dotenv.config()

import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Import path module to send files
import path from 'path';

// Importing Express
import express from 'express';

// Initilizing variable, 'app' via express
const app = express();

// Routes Section //
app.get('/', (req, res) => {
    // res.send('<h1>Hello New World :)');
    res.sendFile(path.join(__dirname, 'static', 'index.html'));

});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
