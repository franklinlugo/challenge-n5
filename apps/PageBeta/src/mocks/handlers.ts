import { http, HttpResponse } from 'msw';
import config from './fixtures/config.json';
import credits from './fixtures/credits.json';



export const handlers = [
  http.get('https://api.themoviedb.org/3/configuration', () => {
    new HttpResponse(null, { status: 200 });
    HttpResponse.json(config);
  }),
  http.get('https://api.themoviedb.org/3/movie/7131/credits', () => {
        new HttpResponse(null, { status: 200 });
        HttpResponse.json(credits);
    }
  ),
];
