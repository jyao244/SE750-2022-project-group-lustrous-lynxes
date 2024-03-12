import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// Setup Express
const app = express();
const port = 3001;

app.use(cors());

// Setup JSON parsing for the request body
app.use(express.json());

// Setup our API routes.
import routes from './routes';
app.use('/', routes);

// Connect to the database.
// Once connected, the "then" function will be called, which will start the app listening for client connections.
// Once THAT happens, then the message "App server listening..." will be displayed in the console.
mongoose.connect('xxx') // put your own mongodb url here
    .then(() => app.listen(port, () => console.log(`App server listening on port ${port}!`)));