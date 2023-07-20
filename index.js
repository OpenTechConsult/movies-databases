import express from 'express';
import morgan from 'morgan';
import { router as movieRouter } from './movie/index.js';

const app = express();

app.use(morgan(':date :method :url :status', { immediate: true}));

app.use('/movie', movieRouter);

app.get('/', (request, response) => response.redirect('/movie'));

app.listen(8080, () => {
    console.log('Movies database accessible at http://localhost:8080');
});
