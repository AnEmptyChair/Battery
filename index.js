// Loading Environment Varibles in the projects entry point.
import * as dotenv from 'dotenv';
dotenv.config()

// Importing Express
import express from 'express';

// Initilizing variable, 'app' via express
const app = express();

// Routes Section //
app.get('/', (req, res) => {
    res.send('<h1>Hello New World :)')
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
