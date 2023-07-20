import express from 'express';
import { router as movieRouter } from './movie/index.js';

const app = express();

function log(request, response, next) {
    console.log(request.url);
    next();
}

app.use(log);

app.use('/movie', movieRouter);

app.get('/', (request, response) => response.redirect('/movie'));

app.listen(8080, () => {
    console.log('Movies database accessible at http://localhost:8080');
});
