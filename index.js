import express from 'express';
import bodyParser from 'body-parser';
import quotesRoutes from './routes/routes.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/quotes', quotesRoutes )

app.get('/',(req,response)=>{response.send('Hello')});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));