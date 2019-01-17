import express from 'express';
import bodyParser from 'body-parser';

import routes from './index.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('you have successfully loaded pre-Pylit');
})

routes(app);
export default app;